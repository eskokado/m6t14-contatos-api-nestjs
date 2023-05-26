import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomersService } from '../customers/customers.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private customersService: CustomersService,
    private jwtService: JwtService,
  ) {}

  async validateCustomer(email: string, password: string) {
    const customer = await this.customersService.findByEmail(email);
    if (customer) {
      const passwordMatch = await compare(password, customer.password);
      if (passwordMatch) {
        return { email: customer.email };
      }
    }

    return null;
  }

  async login(email: string) {
    const customer = await this.customersService.findByEmail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: customer.id }),
      customer: {
        id: customer.id,
      },
    };
  }
}

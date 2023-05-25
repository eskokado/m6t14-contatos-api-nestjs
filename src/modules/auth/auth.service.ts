import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateCustomer(email: string, password: string) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        email,
        password,
      },
    });
    if (customer) {
      return {
        email: customer.email,
        customerId: customer.id,
        name: customer.name,
      };
    }

    return null;
  }

  async createToken(customer: { customerId: any; name: any; email: any }) {
    const token = this.jwtService.sign(
      {
        id: customer.customerId,
        name: customer.name,
        email: customer.email,
      },
      {
        subject: String(customer.customerId),
      },
    );
    return token;
  }

  async login(email: string, password: string) {
    const customer = await this.validateCustomer(email, password);
    if (customer) {
      return {
        token: await this.createToken(customer),
        customerId: customer.customerId,
      };
    }
    return null;
  }
}

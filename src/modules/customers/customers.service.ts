import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomersRepository } from './repositories/customers.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomersService {
  constructor(private customersRepository: CustomersRepository) {}
  async create(data: CreateCustomerDto) {
    const findCustomer = await this.customersRepository.findByEmail(data.email);

    data.password = await bcryptPassword(data.password);

    if (findCustomer) {
      throw new ConflictException('Customer already exists');
    }
    const customer = await this.customersRepository.create(data);

    return customer;
  }

  async findAll() {
    const customers = await this.customersRepository.findAll();
    return customers;
  }

  async findOne(id: string) {
    const customer = await this.customersRepository.findOne(id);
    if (!customer) {
      throw new NotFoundException('Customer not found !');
    }
    return customer;
  }

  async findByEmail(email: string) {
    const customer = await this.customersRepository.findByEmail(email);
    return customer;
  }

  async update(id: string, data: UpdateCustomerDto) {
    if (data.password) data.password = await bcryptPassword(data.password);
    const customer = await this.customersRepository.update(id, data);
    return customer;
  }

  async remove(id: string) {
    await this.customersRepository.delete(id);
    return;
  }
}

const bcryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();

  const hash = await bcrypt.hash(password, salt);

  return hash;
}

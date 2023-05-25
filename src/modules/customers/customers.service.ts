import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerRepository } from './repositories/customers.repository';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: CustomerRepository,
  ) {}

  async create(data: CreateCustomerDto) {
    return await this.customerRepository.create(data);
  }

  async findAll() {
    return await this.customerRepository.findAll();
  }

  async findOne(id: string) {
    return await this.customerRepository.findOne(id);
  }

  async findByEmail(email: string) {
    return await this.customerRepository.findByEmail(email);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    await this.customerRepository.update(id, updateCustomerDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    await this.customerRepository.delete(id);
  }
}

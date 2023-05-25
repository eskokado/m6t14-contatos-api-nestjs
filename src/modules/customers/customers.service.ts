import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomersRepository } from './repositories/customers.repository';

@Injectable()
export class CustomersService {
  constructor(private customersRepository: CustomersRepository) {}
  async create(createCustomerDto: CreateCustomerDto) {
    const findCustomer = await this.customersRepository.findByEmail(
      createCustomerDto.email,
    );
    if (findCustomer) {
      throw new ConflictException('Customer already exists');
    }
    const customer = await this.customersRepository.create(createCustomerDto);

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
    const customer = await this.customersRepository.findOne(email);
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customersRepository.update(
      id,
      updateCustomerDto,
    );
    return customer;
  }

  async remove(id: string) {
    await this.customersRepository.delete(id);
    return;
  }
}

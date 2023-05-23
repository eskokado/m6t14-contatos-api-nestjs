import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const { name, email, password } = createCustomerDto;
    return await this.customerRepository.save({
      name,
      email,
      password,
    });
  }

  async findAll() {
    return await this.customerRepository.find();
  }

  async findOne(id: string) {
    return await this.customerRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    await this.customerRepository.update(id, updateCustomerDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    await this.customerRepository.delete(id);
  }
}

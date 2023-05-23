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

  create(createCustomerDto: CreateCustomerDto) {
    const { name, email, password } = createCustomerDto;
    return this.customerRepository.save({
      name,
      email,
      password,
    });
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} customer`;
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: string) {
    return `This action removes a #${id} customer`;
  }
}

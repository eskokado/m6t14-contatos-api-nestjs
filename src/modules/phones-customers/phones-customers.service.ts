import { Injectable } from '@nestjs/common';
import { CreatePhonesCustomerDto } from './dto/create-phones-customer.dto';
import { UpdatePhonesCustomerDto } from './dto/update-phones-customer.dto';

@Injectable()
export class PhonesCustomersService {
  create(createPhonesCustomerDto: CreatePhonesCustomerDto) {
    return 'This action adds a new phonesCustomer';
  }

  findAll() {
    return `This action returns all phonesCustomers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phonesCustomer`;
  }

  update(id: number, updatePhonesCustomerDto: UpdatePhonesCustomerDto) {
    return `This action updates a #${id} phonesCustomer`;
  }

  remove(id: number) {
    return `This action removes a #${id} phonesCustomer`;
  }
}

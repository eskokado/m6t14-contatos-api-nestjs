import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePhonesCustomerDto } from './dto/create-phones-customer.dto';
import { UpdatePhonesCustomerDto } from './dto/update-phones-customer.dto';
import { PhonesCustomersRepository } from './repositories/phones-customers.repository';

@Injectable()
export class PhonesCustomersService {
  constructor(
    private readonly phonesCustomersRepository: PhonesCustomersRepository,
  ) {}
  async create(data: CreatePhonesCustomerDto) {
    const phoneCustomer = await this.phonesCustomersRepository.create(data);

    return phoneCustomer;
  }

  async findAll() {
    const phoneCustomers = await this.phonesCustomersRepository.findAll();
    return phoneCustomers;
  }

  async findOne(id: string) {
    const phoneCustomer = await this.phonesCustomersRepository.findOne(id);
    if (!phoneCustomer) {
      throw new NotFoundException('Phone Customer not found !');
    }
    return phoneCustomer;
  }

  async update(id: string, data: UpdatePhonesCustomerDto) {
    const phoneCustomer = await this.phonesCustomersRepository.update(id, data);
    return phoneCustomer;
  }

  async remove(id: string) {
    await this.phonesCustomersRepository.delete(id);
    return;
  }
}

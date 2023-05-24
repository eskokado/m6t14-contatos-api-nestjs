import { InjectRepository } from '@nestjs/typeorm';
import { CreateCustomerDto } from '../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../dto/update-customer.dto';
import { CustomerEntity } from '../../entities/customer.entity';
import { CustomerRepository } from '../customers.repository';
import { Repository } from 'typeorm';

export class CustomerTypeOrmRepository implements CustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  async create(data: CreateCustomerDto): Promise<CustomerEntity> {
    const { name, email, password } = data;
    return await this.customerRepository.save({
      name,
      email,
      password,
    });
  }

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find();
  }

  async findOne(id: string): Promise<CustomerEntity> {
    return await this.customerRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data: UpdateCustomerDto): Promise<CustomerEntity> {
    await this.customerRepository.update(id, data);
    return await this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}

import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CustomerEntity } from '../entities/customer.entity';

export abstract class CustomerRepository {
  abstract create(
    data: CreateCustomerDto,
  ): Promise<CustomerEntity> | CustomerEntity;
  abstract findAll(): Promise<CustomerEntity[]> | CustomerEntity[];
  abstract findOne(
    id: string,
  ): Promise<CustomerEntity | undefined> | CustomerEntity | undefined;
  abstract update(
    id: string,
    data: UpdateCustomerDto,
  ): Promise<CustomerEntity> | CustomerEntity;
  abstract delete(id: string): Promise<void> | void;
}

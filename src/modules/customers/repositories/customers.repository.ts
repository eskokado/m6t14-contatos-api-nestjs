import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { Customer } from '../entities/customer.entity';

export abstract class CustomerRepository {
  abstract create(data: CreateCustomerDto): Promise<Customer> | Customer;
  abstract findAll(): Promise<Customer[]> | Customer[];
  abstract findOne(
    id: string,
  ): Promise<Customer | undefined> | Customer | undefined;
  abstract findByEmail(email: string): Promise<Customer> | Customer;
  abstract update(
    id: string,
    data: UpdateCustomerDto,
  ): Promise<Customer> | Customer;
  abstract delete(id: string): Promise<void> | void;
}

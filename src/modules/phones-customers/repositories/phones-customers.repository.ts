import { CreatePhonesCustomerDto } from '../dto/create-phones-customer.dto';
import { PhonesCustomer } from '../entities/phones-customer.entity';
import { UpdatePhonesCustomerDto } from '../dto/update-phones-customer.dto';

export abstract class PhonesCustomersRepository {
  abstract create(data: CreatePhonesCustomerDto): Promise<PhonesCustomer>;
  abstract findAll(): Promise<PhonesCustomer[]>;
  abstract findOne(id: string): Promise<PhonesCustomer>;
  abstract update(
    id: string,
    data: UpdatePhonesCustomerDto,
  ): Promise<PhonesCustomer>;
  abstract delete(id: string): Promise<void> | void;
}

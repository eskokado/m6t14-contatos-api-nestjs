import { PartialType } from '@nestjs/swagger';
import { CreatePhonesCustomerDto } from './create-phones-customer.dto';

export class UpdatePhonesCustomerDto extends PartialType(
  CreatePhonesCustomerDto,
) {}

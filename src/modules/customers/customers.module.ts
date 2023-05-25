import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerRepository } from './repositories/customers.repository';
import { CustomerTypeOrmRepository } from './repositories/type-orm/customers.type-orm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Customer]), CustomerTypeOrmRepository],
  controllers: [CustomersController],
  providers: [
    CustomersService,
    { provide: CustomerRepository, useClass: CustomerTypeOrmRepository },
  ],
})
export class CustomersModule {}

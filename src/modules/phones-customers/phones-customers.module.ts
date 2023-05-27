import { Module } from '@nestjs/common';
import { PhonesCustomersService } from './phones-customers.service';
import { PhonesCustomersController } from './phones-customers.controller';
import { PrismaService } from '../../database/prisma.service';
import { PhonesCustomersRepository } from './repositories/phones-customers.repository';
import { PhonesCustomersPrismaRepository } from './repositories/prisma/phones-customer.prisma.repository';

@Module({
  controllers: [PhonesCustomersController],
  providers: [
    PhonesCustomersService,
    PrismaService,
    {
      provide: PhonesCustomersRepository,
      useClass: PhonesCustomersPrismaRepository,
    },
  ],
})
export class PhonesCustomersModule {}

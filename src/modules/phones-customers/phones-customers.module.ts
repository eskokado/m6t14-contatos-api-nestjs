import { Module } from '@nestjs/common';
import { PhonesCustomersService } from './phones-customers.service';
import { PhonesCustomersController } from './phones-customers.controller';

@Module({
  controllers: [PhonesCustomersController],
  providers: [PhonesCustomersService]
})
export class PhonesCustomersModule {}

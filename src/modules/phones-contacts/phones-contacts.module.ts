import { Module } from '@nestjs/common';
import { PhonesContactsService } from './phones-contacts.service';
import { PhonesContactsController } from './phones-contacts.controller';

@Module({
  controllers: [PhonesContactsController],
  providers: [PhonesContactsService]
})
export class PhonesContactsModule {}

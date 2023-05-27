import { Module } from '@nestjs/common';
import { PhonesContactsService } from './phones-contacts.service';
import { PhonesContactsController } from './phones-contacts.controller';
import { PrismaService } from "../../database/prisma.service";
import { PhonesContactsRepository } from "./repositories/phones-contacts.repository";
import { PhonesContactsPrismaRepository } from "./repositories/prisma/phones-contact.prisma.repository";

@Module({
  controllers: [PhonesContactsController],
  providers: [
    PhonesContactsService,
    PrismaService,
    {
      provide: PhonesContactsRepository,
      useClass: PhonesContactsPrismaRepository,
    },
  ]
})
export class PhonesContactsModule {}

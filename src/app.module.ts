import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './modules/customers/customers.module';
import { DataSource } from 'typeorm';
import { ContactsModule } from './modules/contacts/contacts.module';

@Module({
  imports: [CustomersModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

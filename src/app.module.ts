import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './modules/customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './modules/customers/entities/customer.entity';
import { DataSource } from 'typeorm';
import { ContactsModule } from './modules/contacts/contacts.module';
import { Contact } from './modules/contacts/entities/contact.entity';

@Module({
  imports: [
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3350,
      username: 'user',
      password: 'pass',
      database: 'database',
      entities: [Customer, Contact],
      synchronize: true,
    }),
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

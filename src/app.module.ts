import { Module } from '@nestjs/common';
import { CustomersModule } from './modules/customers/customers.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AuthModule } from './modules/auth/auth.module';
import { PhonesCustomersModule } from './modules/phones-customers/phones-customers.module';
import { PhonesContactsModule } from './modules/phones-contacts/phones-contacts.module';

@Module({
  imports: [CustomersModule, ContactsModule, AuthModule, PhonesCustomersModule, PhonesContactsModule],
})
export class AppModule {}

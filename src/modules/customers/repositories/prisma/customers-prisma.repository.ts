import { Injectable } from '@nestjs/common';
import { CustomersRepository } from '../customers.repository';
import { CreateCustomerDto } from '../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../dto/update-customer.dto';
import { Customer } from '../../entities/customer.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CustomersPrismaRepository implements CustomersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    Object.assign(customer, {
      ...data,
    });

    const newCustomer = await this.prisma.customer.create({
      data: { ...customer },
    });

    return plainToInstance(Customer, newCustomer);
  }
  async findAll(): Promise<Customer[]> {
    const customers = await this.prisma.customer.findMany({
      include: {
        contacts: {
          include: {
            phones: true,
          },
        },
        phones: true,
      },
    });
    return plainToInstance(Customer, customers);
  }
  async findOne(id: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      include: {
        contacts: {
          include: {
            phones: true,
          },
        },
        phones: true,
      },
    });
    return plainToInstance(Customer, customer);
  }
  async findByEmail(email: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { email },
    });
    return plainToInstance(Customer, customer);
  }
  async update(id: string, data: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.prisma.customer.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Customer, customer);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.customer.delete({
      where: { id },
    });
  }
}

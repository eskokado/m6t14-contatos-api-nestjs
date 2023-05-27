import { Injectable } from '@nestjs/common';
import { PhonesCustomersRepository } from '../phones-customers.repository';
import { CreatePhonesCustomerDto } from '../../dto/create-phones-customer.dto';
import { UpdatePhonesCustomerDto } from '../../dto/update-phones-customer.dto';
import { PhonesCustomer } from '../../entities/phones-customer.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PhonesCustomersPrismaRepository
  implements PhonesCustomersRepository
{
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePhonesCustomerDto): Promise<PhonesCustomer> {
    const phonesCustomer = new PhonesCustomer();

    Object.assign(phonesCustomer, {
      ...data,
    });

    const newPhonesCustomer = await this.prisma.phoneCustomer.create({
      data: { ...phonesCustomer, customerId: data.customerId },
    });

    return plainToInstance(PhonesCustomer, newPhonesCustomer);
  }

  async findAll(): Promise<PhonesCustomer[]> {
    const phonesCustomers = await this.prisma.phoneCustomer.findMany();
    return plainToInstance(PhonesCustomer, phonesCustomers);
  }

  async findOne(id: string): Promise<PhonesCustomer> {
    const phonesCustomer = await this.prisma.phoneCustomer.findUnique({
      where: { id },
    });
    return plainToInstance(PhonesCustomer, phonesCustomer);
  }

  async update(
    id: string,
    data: UpdatePhonesCustomerDto,
  ): Promise<PhonesCustomer> {
    const phonesCustomer = await this.prisma.phoneCustomer.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(PhonesCustomer, phonesCustomer);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.phoneCustomer.delete({
      where: { id },
    });
  }
}

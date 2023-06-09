import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateContactDto): Promise<Contact> {
    const contact = new Contact();

    Object.assign(contact, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: { ...contact, customerId: data.customerId },
    });

    return plainToInstance(Contact, newContact);
  }
  async findAll(): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      include: {
        phones: true,
        customer: true,
      }
    });
    return plainToInstance(Contact, contacts);
  }
  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
      include: {
        phones: true,
        customer: true,
      }
    });
    return plainToInstance(Contact, contact);
  }
  async findByEmail(email: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { email },
    });
    return plainToInstance(Contact, contact);
  }
  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Contact, contact);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}

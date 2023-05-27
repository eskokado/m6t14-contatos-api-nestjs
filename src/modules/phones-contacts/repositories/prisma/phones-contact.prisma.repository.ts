import { Injectable } from '@nestjs/common';
import { PhonesContactsRepository } from '../phones-contacts.repository';
import { CreatePhonesContactDto } from '../../dto/create-phones-contact.dto';
import { UpdatePhonesContactDto } from '../../dto/update-phones-contact.dto';
import { PhonesContact } from '../../entities/phones-contact.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PhonesContactsPrismaRepository
  implements PhonesContactsRepository
{
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePhonesContactDto): Promise<PhonesContact> {
    const phonesContact = new PhonesContact();

    Object.assign(phonesContact, {
      ...data,
    });

    const newPhonesContact = await this.prisma.phoneContact.create({
      data: { ...phonesContact, contactId: data.contactId },
    });

    return plainToInstance(PhonesContact, newPhonesContact);
  }

  async findAll(): Promise<PhonesContact[]> {
    const phonesContacts = await this.prisma.phoneContact.findMany();
    return plainToInstance(PhonesContact, phonesContacts);
  }

  async findOne(id: string): Promise<PhonesContact> {
    const phonesContact = await this.prisma.phoneContact.findUnique({
      where: { id },
    });
    return plainToInstance(PhonesContact, phonesContact);
  }

  async update(
    id: string,
    data: UpdatePhonesContactDto,
  ): Promise<PhonesContact> {
    const phonesContact = await this.prisma.phoneContact.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(PhonesContact, phonesContact);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.phoneContact.delete({
      where: { id },
    });
  }
}

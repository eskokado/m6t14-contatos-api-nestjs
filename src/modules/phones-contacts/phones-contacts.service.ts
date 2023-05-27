import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { CreatePhonesContactDto } from './dto/create-phones-contact.dto';
import { UpdatePhonesContactDto } from './dto/update-phones-contact.dto';
import { PhonesContactsRepository } from './repositories/phones-contacts.repository';

@Injectable()
export class PhonesContactsService {
  constructor(
    private readonly phonesContactsRepository: PhonesContactsRepository,
  ) {}
  async create(data: CreatePhonesContactDto) {
    const phoneContact = await this.phonesContactsRepository.create(data);

    return phoneContact;
  }

  async findAll() {
    const phoneContacts = await this.phonesContactsRepository.findAll();
    return phoneContacts;
  }

  async findOne(id: string) {
    const phoneContact = await this.phonesContactsRepository.findOne(id);
    if (!phoneContact) {
      throw new NotFoundException('Phone Contact not found !');
    }
    return phoneContact;
  }

  async update(id: string, data: UpdatePhonesContactDto) {
    const phoneContact = await this.phonesContactsRepository.update(id, data);
    return phoneContact;
  }

  async remove(id: string) {
    await this.phonesContactsRepository.delete(id);
    return;
  }
}

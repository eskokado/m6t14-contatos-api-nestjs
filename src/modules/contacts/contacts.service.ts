import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(data: CreateContactDto) {
    const findContact = await this.contactsRepository.findByEmail(data.email);
    if (findContact) {
      throw new ConflictException('Contact already exists');
    }

    const contact = await this.contactsRepository.create(data);

    return contact;
  }

  async findAll() {
    const contacts = await this.contactsRepository.findAll();
    return contacts;
  }

  async findOne(id: string) {
    const contact = await this.contactsRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contact not found !');
    }
    return contact;
  }

  async findByEmail(email: string) {
    const contact = await this.contactsRepository.findOne(email);
    return contact;
  }

  async update(id: string, data: UpdateContactDto) {
    const contact = await this.contactsRepository.update(id, data);
    return contact;
  }

  async remove(id: string) {
    await this.contactsRepository.delete(id);
    return;
  }
}

const bcryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt();

  const hash = await bcrypt.hash(password, salt);

  return hash;
};

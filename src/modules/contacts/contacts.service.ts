import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto) {
    const findContact = await this.contactsRepository.findByEmail(
      createContactDto.email,
    );
    if (findContact) {
      throw new ConflictException('Contact already exists');
    }
    const contact = await this.contactsRepository.create(createContactDto);

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

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactsRepository.update(
      id,
      updateContactDto,
    );
    return contact;
  }

  async remove(id: string) {
    await this.contactsRepository.delete(id);
    return;
  }
}

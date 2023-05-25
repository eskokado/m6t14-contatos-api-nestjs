import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const { name, email, password, customerId } = createContactDto;
    return await this.contactRepository.save({
      name,
      email,
      password,
      customerId,
    });
  }

  async findAll() {
    return await this.contactRepository.find();
  }

  async findOne(id: string) {
    return await this.contactRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    await this.contactRepository.update(id, updateContactDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    await this.contactRepository.delete(id);
  }
}

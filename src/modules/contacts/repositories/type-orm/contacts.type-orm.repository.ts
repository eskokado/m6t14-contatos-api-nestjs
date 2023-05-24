import { InjectRepository } from '@nestjs/typeorm';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { ContactEntity } from '../../entities/contact.entity';
import { ContactRepository } from '../contacts.repository';
import { Repository } from 'typeorm';

export class ContactTypeOrmRepository implements ContactRepository {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactEntity>,
  ) {}

  async create(data: CreateContactDto): Promise<ContactEntity> {
    const { name, email, password } = data;
    return await this.contactRepository.save({
      name,
      email,
      password,
    });
  }

  async findAll(): Promise<ContactEntity[]> {
    return await this.contactRepository.find();
  }

  async findOne(id: string): Promise<ContactEntity> {
    return await this.contactRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, data: UpdateContactDto): Promise<ContactEntity> {
    await this.contactRepository.update(id, data);
    return await this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.contactRepository.delete(id);
  }
}

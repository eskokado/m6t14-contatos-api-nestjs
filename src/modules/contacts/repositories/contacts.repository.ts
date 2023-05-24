import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { ContactEntity } from '../entities/contact.entity';

export abstract class ContactRepository {
  abstract create(
    data: CreateContactDto,
  ): Promise<ContactEntity> | ContactEntity;
  abstract findAll(): Promise<ContactEntity[]> | ContactEntity[];
  abstract findOne(
    id: string,
  ): Promise<ContactEntity | undefined> | ContactEntity | undefined;
  abstract update(
    id: string,
    data: UpdateContactDto,
  ): Promise<ContactEntity> | ContactEntity;
  abstract delete(id: string): Promise<void> | void;
}

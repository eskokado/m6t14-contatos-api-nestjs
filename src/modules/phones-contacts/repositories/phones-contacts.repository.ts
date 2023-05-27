import { CreatePhonesContactDto } from '../dto/create-phones-contact.dto';
import { PhonesContact } from '../entities/phones-contact.entity';
import { UpdatePhonesContactDto } from '../dto/update-phones-contact.dto';

export abstract class PhonesContactsRepository {
  abstract create(data: CreatePhonesContactDto): Promise<PhonesContact>;
  abstract findAll(): Promise<PhonesContact[]>;
  abstract findOne(id: string): Promise<PhonesContact>;
  abstract update(
    id: string,
    data: UpdatePhonesContactDto,
  ): Promise<PhonesContact>;
  abstract delete(id: string): Promise<void> | void;
}

import { Injectable } from '@nestjs/common';
import { CreatePhonesContactDto } from './dto/create-phones-contact.dto';
import { UpdatePhonesContactDto } from './dto/update-phones-contact.dto';

@Injectable()
export class PhonesContactsService {
  create(createPhonesContactDto: CreatePhonesContactDto) {
    return 'This action adds a new phonesContact';
  }

  findAll() {
    return `This action returns all phonesContacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phonesContact`;
  }

  update(id: number, updatePhonesContactDto: UpdatePhonesContactDto) {
    return `This action updates a #${id} phonesContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} phonesContact`;
  }
}

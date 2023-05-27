import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhonesContactsService } from './phones-contacts.service';
import { CreatePhonesContactDto } from './dto/create-phones-contact.dto';
import { UpdatePhonesContactDto } from './dto/update-phones-contact.dto';

@Controller('phones-contacts')
export class PhonesContactsController {
  constructor(private readonly phonesContactsService: PhonesContactsService) {}

  @Post()
  create(@Body() createPhonesContactDto: CreatePhonesContactDto) {
    return this.phonesContactsService.create(createPhonesContactDto);
  }

  @Get()
  findAll() {
    return this.phonesContactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonesContactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhonesContactDto: UpdatePhonesContactDto) {
    return this.phonesContactsService.update(+id, updatePhonesContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonesContactsService.remove(+id);
  }
}

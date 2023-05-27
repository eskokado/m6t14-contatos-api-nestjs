import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhonesCustomersService } from './phones-customers.service';
import { CreatePhonesCustomerDto } from './dto/create-phones-customer.dto';
import { UpdatePhonesCustomerDto } from './dto/update-phones-customer.dto';

@Controller('phones-customers')
export class PhonesCustomersController {
  constructor(
    private readonly phonesCustomersService: PhonesCustomersService,
  ) {}

  @Post()
  create(@Body() createPhonesCustomerDto: CreatePhonesCustomerDto) {
    return this.phonesCustomersService.create(createPhonesCustomerDto);
  }

  @Get()
  findAll() {
    return this.phonesCustomersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonesCustomersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhonesCustomerDto: UpdatePhonesCustomerDto) {
    return this.phonesCustomersService.update(id, updatePhonesCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonesCustomersService.remove(id);
  }
}

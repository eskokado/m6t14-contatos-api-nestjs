import { PartialType } from '@nestjs/swagger';
import { CreatePhonesContactDto } from './create-phones-contact.dto';

export class UpdatePhonesContactDto extends PartialType(CreatePhonesContactDto) {}

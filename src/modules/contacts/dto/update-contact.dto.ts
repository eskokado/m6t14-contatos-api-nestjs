import { CreateContactDto } from './create-contact.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateContactDto extends PartialType(CreateContactDto) {}

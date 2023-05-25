import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

  customer_id: string;

  constructor() {
    this.id = randomUUID();
  }
}

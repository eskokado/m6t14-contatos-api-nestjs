import { randomUUID } from 'crypto';
import { Exclude } from 'class-transformer';

export class Customer {
  readonly id: string;

  name: string;

  email: string;

  password: string;

  constructor() {
    this.id = randomUUID();
  }
}

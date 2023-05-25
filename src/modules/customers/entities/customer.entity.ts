import { randomUUID } from 'crypto';

export class Customer {
  readonly id: string;

  name: string;

  email: string;

  password: string;

  constructor() {
    this.id = randomUUID();
  }
}

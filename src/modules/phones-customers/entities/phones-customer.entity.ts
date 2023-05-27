import { randomUUID } from 'crypto';

export class PhonesCustomer {
  readonly id: string;

  name: string;

  number: string;
  constructor() {
    this.id = randomUUID();
  }
}

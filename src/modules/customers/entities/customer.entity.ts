import { randomUUID } from 'crypto';
import { Exclude } from "class-transformer";

export class Customer {
  readonly id: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

  createdAt: string;

  constructor() {
    this.id = randomUUID();
  }
}

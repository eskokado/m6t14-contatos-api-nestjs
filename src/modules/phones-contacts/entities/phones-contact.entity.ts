import { randomUUID } from "crypto";

export class PhonesContact {
  readonly id: string;

  name: string;

  number: string;
  constructor() {
    this.id = randomUUID();
  }
}

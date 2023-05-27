import { Test, TestingModule } from '@nestjs/testing';
import { PhonesContactsService } from './phones-contacts.service';

describe('PhonesContactsService', () => {
  let service: PhonesContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonesContactsService],
    }).compile();

    service = module.get<PhonesContactsService>(PhonesContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

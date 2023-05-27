import { Test, TestingModule } from '@nestjs/testing';
import { PhonesCustomersService } from './phones-customers.service';

describe('PhonesCustomersService', () => {
  let service: PhonesCustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonesCustomersService],
    }).compile();

    service = module.get<PhonesCustomersService>(PhonesCustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

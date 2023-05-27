import { Test, TestingModule } from '@nestjs/testing';
import { PhonesCustomersController } from './phones-customers.controller';
import { PhonesCustomersService } from './phones-customers.service';

describe('PhonesCustomersController', () => {
  let controller: PhonesCustomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonesCustomersController],
      providers: [PhonesCustomersService],
    }).compile();

    controller = module.get<PhonesCustomersController>(PhonesCustomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

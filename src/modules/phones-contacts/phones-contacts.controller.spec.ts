import { Test, TestingModule } from '@nestjs/testing';
import { PhonesContactsController } from './phones-contacts.controller';
import { PhonesContactsService } from './phones-contacts.service';

describe('PhonesContactsController', () => {
  let controller: PhonesContactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonesContactsController],
      providers: [PhonesContactsService],
    }).compile();

    controller = module.get<PhonesContactsController>(PhonesContactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

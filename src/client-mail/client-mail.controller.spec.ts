import { Test, TestingModule } from '@nestjs/testing';
import { ClientMailController } from './client-mail.controller';

describe('ClientMailController', () => {
  let controller: ClientMailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientMailController],
    }).compile();

    controller = module.get<ClientMailController>(ClientMailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

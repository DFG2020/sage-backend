import { Test, TestingModule } from '@nestjs/testing';
import { ClientMailService } from './client-mail.service';

describe('ClientMailService', () => {
  let service: ClientMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientMailService],
    }).compile();

    service = module.get<ClientMailService>(ClientMailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

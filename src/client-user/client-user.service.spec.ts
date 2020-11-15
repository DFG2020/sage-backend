import {Test, TestingModule} from '@nestjs/testing';
import {ClientUserService} from './client-user.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {ClientUser} from "./entity/client-user.entity";

describe('ClientUserService', () => {
  let service: ClientUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientUserService,
          {
              provide: getRepositoryToken(ClientUser),
              useValue: {

              }
          }
      ],
    }).compile();

    service = module.get<ClientUserService>(ClientUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

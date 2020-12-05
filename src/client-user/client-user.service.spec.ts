import {Test, TestingModule} from '@nestjs/testing';
import {ClientUserService} from './client-user.service';
import {getRepositoryToken} from "@nestjs/typeorm";
import {ClientUser} from "./entity/client-user.entity";
import {Repository} from "typeorm";
import {DeepPartial} from "typeorm/common/DeepPartial";

describe('ClientUserService', () => {
    let clientUser: ClientUser;
    let clientUserRepository: Repository<ClientUser>;

    let subject: ClientUserService;

    beforeEach(async () => {
        clientUser = new ClientUser();
        clientUser.firstName = 'first_name';
        clientUser.lastName = 'last_name';
        clientUser.middleName = 'middle_name';
        clientUser.forwardingAddressLine = 'forwarding_address_line';
        clientUser.authorizedFirstName = 'authorized_first_name';
        clientUser.authorizedLastName = 'authorized_last_name';
        clientUser.authorizedMiddleName = 'authorized_middle_name';
        clientUser.photoId = 'photo_id';

        const module: TestingModule = await Test.createTestingModule({
            providers: [ClientUserService,
              {
                  provide: getRepositoryToken(ClientUser),
                  useValue: {
                      findOne: jest.fn().mockResolvedValue(clientUser),
                      save: jest.fn().mockResolvedValue(clientUser),
                      update: jest.fn().mockResolvedValue(clientUser)
                  }
              }
            ],
        }).compile();

        clientUserRepository = module.get(getRepositoryToken(ClientUser));
        subject = module.get<ClientUserService>(ClientUserService);
    });

    it('should return user for valid Id', async () => {
        const result: ClientUser = await subject.getUser('user_id');

        expect(result).toEqual(clientUser);
    });

    it('should return undefined for invalid Id', async () => {
        jest.spyOn(clientUserRepository, 'findOne').mockImplementation(() => undefined);

        const result: ClientUser = await subject.getUser('user_id');

        expect(result).toBeUndefined();
    });

    it('should generate user Id when creating a new user', async () => {
        let userId: string = undefined;
        jest.spyOn(clientUserRepository, 'save')
            .mockImplementation((deepPartial: DeepPartial<ClientUser>) => {
                userId = deepPartial.userId;
                return undefined;
            });

        await subject.createUser(clientUser);

        expect(userId).toBeDefined()
    });

    it('should return undefined if user does not exist on update', async () => {
        jest.spyOn(clientUserRepository, 'findOne').mockImplementation(() => undefined);

        const result: ClientUser = await subject.getUser('user_id');

        expect(result).toBeUndefined();
    });
});

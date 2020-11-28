import {Test, TestingModule} from '@nestjs/testing';
import {ClientUserController} from './client-user.controller';
import {ClientUserService} from "./client-user.service";
import {NotFoundException} from "@nestjs/common";
import {ClientUserResponseDtoAdapter} from "./adapter/client-user-response-dto-adapter";
import {ClientUserDtoAdapter} from "./adapter/client-user-dto-adapter";

describe('ClientUserController', () => {
    let clientUserService: ClientUserService;

    let subject: ClientUserController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ClientUserController],
            providers: [
                {
                    provide: ClientUserService,
                    useValue: {
                        getUser: jest.fn().mockResolvedValue(undefined)
                    }
                },
                {
                    provide: ClientUserResponseDtoAdapter,
                    useValue: {}
                },
                {
                    provide: ClientUserDtoAdapter,
                    useValue: {}
                }
            ]
        }).compile();

        clientUserService = module.get<ClientUserService>(ClientUserService);
        subject = module.get<ClientUserController>(ClientUserController);
    });

    it('should be defined', () => {
        expect(subject).toBeDefined();
    });

    describe('When fetching a user', () => {
        it('should throw exception if user is not found', async () => {
            await expect(subject.getUser('id')).rejects.toThrow(NotFoundException)
        });
    });
});

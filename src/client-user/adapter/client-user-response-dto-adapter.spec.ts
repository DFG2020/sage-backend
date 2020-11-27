import {ClientUserResponseDtoAdapter} from "./client-user-response-dto-adapter";
import {ClientUserDtoAdapter} from "./client-user-dto-adapter";
import {ClientUserDto} from "../dto/client-user-dto";
import {ClientUser} from "../entity/client-user.entity";
import {ClientUserResponseDto} from "../dto/client-user-response-dto";

describe('ClientUserResponseDtoAdapter', () => {
    let mockClientUserDtoAdapter: ClientUserDtoAdapter;
    let clientUserDto: ClientUserDto;

    let subject: ClientUserResponseDtoAdapter;

    beforeEach(() => {
        clientUserDto = new ClientUserDto('first_name', 'last_name');
        mockClientUserDtoAdapter = new ClientUserDtoAdapter();
        jest.spyOn(mockClientUserDtoAdapter, 'adapt').mockImplementation(() => clientUserDto);

        subject = new ClientUserResponseDtoAdapter(mockClientUserDtoAdapter);
    });

    it('should successfully adapt entity into response dto', () => {
        const clientUser: ClientUser = new ClientUser();
        clientUser.userId = 'user_id';
        clientUser.firstName = 'first_name';
        clientUser.lastName = 'last_name';

        const result: ClientUserResponseDto = subject.adapt(clientUser);

        expect(result.userId).toEqual(clientUser.userId);
        expect(result.user).toEqual(clientUserDto);
    });
});

import {ClientUserDtoAdapter} from './client-user-dto-adapter';
import {ClientUser} from "../entity/client-user.entity";
import {ClientUserDto} from "../dto/client-user-dto";

describe('ClientUserDtoAdapter', () => {
    let subject: ClientUserDtoAdapter;

    beforeEach(() => {
        subject = new ClientUserDtoAdapter();
    });

    it('should successfully adapt fully defined entity', () => {
        const clientUser: ClientUser = new ClientUser();
        clientUser.userId = 'user_id';
        clientUser.firstName = 'first_name';
        clientUser.lastName = 'last_name';
        clientUser.middleName = 'middle_name';
        clientUser.forwardingAddressLine = 'forwarding_address_line';
        clientUser.authorizedFirstName = 'authorized_first_name';
        clientUser.authorizedLastName = 'authorized_last_name';
        clientUser.authorizedMiddleName = 'authorized_middle_name';
        clientUser.photoId = 'photo_id';

        const result: ClientUserDto = subject.toExternal(clientUser);

        expect(result.firstName).toEqual(clientUser.firstName);
        expect(result.lastName).toEqual(clientUser.lastName);
        expect(result.middleName).toEqual(clientUser.middleName);
        expect(result.forwardAddressLine).toEqual(clientUser.forwardingAddressLine);
        expect(result.authorizedPickupFirstName).toEqual(clientUser.authorizedFirstName);
        expect(result.authorizedPickupLastName).toEqual(clientUser.authorizedLastName);
        expect(result.profileImageId).toEqual(clientUser.photoId);
    });

    it('should successfully adapt minimally defined entity', () => {
        const clientUser: ClientUser = new ClientUser();
        clientUser.userId = 'user_id';
        clientUser.firstName = 'first_name';
        clientUser.lastName = 'last_name';

        const result: ClientUserDto = subject.toExternal(clientUser);

        expect(result.firstName).toEqual(clientUser.firstName);
        expect(result.lastName).toEqual(clientUser.lastName);
        expect(result.middleName).toEqual(clientUser.middleName);
        expect(result.forwardAddressLine).toBeUndefined();
        expect(result.authorizedPickupFirstName).toBeUndefined();
        expect(result.authorizedPickupLastName).toBeUndefined();
        expect(result.profileImageId).toBeUndefined();
    });
});
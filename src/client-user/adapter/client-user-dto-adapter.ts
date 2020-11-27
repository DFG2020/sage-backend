import {ClientUser} from "../entity/client-user.entity";
import {ClientUserDto} from "../dto/client-user-dto";

/**
 * Responsible for adapting a Client User Entity into a Client User DTO.
 */
export class ClientUserDtoAdapter {
    adapt(clientUser: ClientUser): ClientUserDto {
        return new ClientUserDto(clientUser.firstName,
            clientUser.lastName,
            clientUser.middleName, clientUser.forwardingAddressLine,
            clientUser.authorizedFirstName,
            clientUser.authorizedLastName,
            clientUser.photo_id);
    }
}

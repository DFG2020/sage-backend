import {ClientUser} from "../entity/client-user.entity";
import {ClientUserDto} from "../dto/client-user-dto";

/**
 * Responsible for adapting a Client User Entity into a Client User DTO.
 */
export class ClientUserDtoAdapter {
    /**
     * Converts the internal representation of users into the external representation.
     *
     * @param clientUser
     */
    toExternal(clientUser: ClientUser): ClientUserDto {
        return new ClientUserDto(clientUser.firstName,
            clientUser.lastName,
            clientUser.middleName,
            clientUser.forwardingAddressLine,
            clientUser.authorizedFirstName,
            clientUser.authorizedLastName,
            clientUser.photoId);
    }

    /**
     * Converts the external representation of users into the internal representation.
     *
     * @param clientUserDto
     */
    toInternal(clientUserDto: ClientUserDto): ClientUser {
        const user: ClientUser = new ClientUser();
        user.firstName = clientUserDto.firstName;
        user.lastName = clientUserDto.lastName;
        user.middleName = clientUserDto.middleName;
        user.forwardingAddressLine = clientUserDto.forwardAddressLine;
        user.authorizedFirstName = clientUserDto.authorizedPickupFirstName;
        user.authorizedLastName = clientUserDto.authorizedPickupLastName;
        user.photoId = clientUserDto.profileImageId;

        return user;
    }
}

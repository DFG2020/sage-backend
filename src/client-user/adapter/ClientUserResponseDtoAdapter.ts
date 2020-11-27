import {ClientUser} from "../entity/client-user.entity";
import {ClientUserResponseDto} from "../dto/client-user-response-dto";
import {ClientUserDtoAdapter} from "./client-user-dto-adapter";
import {ClientUserDto} from "../dto/client-user-dto";

/**
 * Responsible for converting a client user into a client user response DTO.
 */
export class ClientUserResponseDtoAdapter {
    private readonly clientUserDtoAdapter: ClientUserDtoAdapter;

    constructor(clientUserDtoAdapter?: ClientUserDtoAdapter) {
        this.clientUserDtoAdapter = clientUserDtoAdapter != undefined
            ? clientUserDtoAdapter
            : new ClientUserDtoAdapter();
    }

    adapt(clientUser: ClientUser): ClientUserResponseDto {
        const clientUserDto: ClientUserDto = this.clientUserDtoAdapter.adapt(clientUser);
        return new ClientUserResponseDto(clientUser.userId, clientUserDto);
    }
}

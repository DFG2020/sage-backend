import {ClientUser} from "../entity/client-user.entity";
import {ClientUserResponseDto} from "../dto/client-user-response-dto";
import {ClientUserDtoAdapter} from "./client-user-dto-adapter";
import {ClientUserDto} from "../dto/client-user-dto";
import {Injectable, Optional} from "@nestjs/common";

/**
 * Responsible for converting a client user into a client user response DTO.
 */
@Injectable()
export class ClientUserResponseDtoAdapter {
    private readonly clientUserDtoAdapter: ClientUserDtoAdapter;

    constructor(@Optional() clientUserDtoAdapter?: ClientUserDtoAdapter) {
        this.clientUserDtoAdapter = clientUserDtoAdapter != undefined
            ? clientUserDtoAdapter
            : new ClientUserDtoAdapter();
    }

    adapt(clientUser: ClientUser): ClientUserResponseDto {
        const clientUserDto: ClientUserDto = this.clientUserDtoAdapter.toExternal(clientUser);
        return new ClientUserResponseDto(clientUser.userId, clientUserDto);
    }
}

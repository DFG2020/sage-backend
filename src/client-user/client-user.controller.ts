import {Body, Controller, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ClientUserDto} from "./dto/client-user-dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {ClientUserResponseDto} from "./dto/client-user-response-dto";
import {ClientUserService} from "./client-user.service";
import {ClientUser} from "./entity/client-user.entity";
import {ClientUserResponseDtoAdapter} from "./adapter/client-user-response-dto-adapter";
import {ClientUserDtoAdapter} from "./adapter/client-user-dto-adapter";

/**
 * API Controller for the user domain.
 */
@ApiTags('user')
@Controller('user')
export class ClientUserController {
    private readonly clientUserResponseDtoAdapter: ClientUserResponseDtoAdapter;
    private readonly clientUserDtoAdapter: ClientUserDtoAdapter;
    private readonly clientUserService: ClientUserService;

    constructor(clientUserService: ClientUserService,
                clientUserDtoAdapter: ClientUserDtoAdapter,
                clientUserResponseDtoAdapter: ClientUserResponseDtoAdapter) {
        this.clientUserService = clientUserService;
        this.clientUserDtoAdapter = clientUserDtoAdapter;
        this.clientUserResponseDtoAdapter = clientUserResponseDtoAdapter;
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create a user', type: ClientUserResponseDto })
    async createUser(@Body() userDto: ClientUserDto): Promise<ClientUserResponseDto> {
        const userParam: ClientUser = this.clientUserDtoAdapter.toInternal(userDto);

        const createdUser: ClientUser = await this.clientUserService.createUser(userParam);

        return this.clientUserResponseDtoAdapter.adapt(createdUser);
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Fetch a specific user', type: ClientUserResponseDto })
    @ApiResponse({ status: 404, description: 'If the user does not exist'})
    async getUser(@Param('id') id: string): Promise<ClientUserResponseDto> {
        const clientUser: ClientUser | undefined = await this.clientUserService.getUser(id);
        if (clientUser === undefined) {
            throw new NotFoundException("User does not exist.")
        }

        return this.clientUserResponseDtoAdapter.adapt(clientUser);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'Update a specific user', type: ClientUserResponseDto })
    async editUser(@Param('id') userId: string,
                   @Body() userDto: ClientUserDto): Promise<ClientUserResponseDto> {
        const userParam: ClientUser = this.clientUserDtoAdapter.toInternal(userDto);

        const updatedUser: ClientUser | undefined = await this.clientUserService.updateUser(userId, userParam);
        if (updatedUser === undefined) {
            throw new NotFoundException("User does not exist.")
        }

        return this.clientUserResponseDtoAdapter.adapt(updatedUser);
    }
}

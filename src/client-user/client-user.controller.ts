import {Body, Controller, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ClientUserDto} from "./dto/client-user-dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {ClientUserResponseDto} from "./dto/client-user-response-dto";
import {ClientUserService} from "./client-user.service";
import {ClientUser} from "./entity/client-user.entity";

@ApiTags('user')
@Controller('user')
export class ClientUserController {
    private readonly clientUserService: ClientUserService;

    constructor(clientUserService: ClientUserService) {
        this.clientUserService = clientUserService;
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create a user', type: ClientUserResponseDto })
    async createUser(@Body() userDto: ClientUserDto): Promise<ClientUserResponseDto> {
        const clientUser: ClientUser = await this.clientUserService.createUser(userDto.firstName, userDto.lastName);

        const responseUser = new ClientUserDto(clientUser.firstName, clientUser.lastName);
        return new ClientUserResponseDto(clientUser.userId, responseUser);
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Fetch a specific user', type: ClientUserResponseDto })
    @ApiResponse({ status: 404, description: 'If the user does not exist'})
    async getUser(@Param('id') id: string): Promise<ClientUserResponseDto> {
        const clientUser: ClientUser | undefined = await this.clientUserService.getUser(id);
        if (clientUser === undefined) {
            throw new NotFoundException("User does not exist.")
        }

        const responseUser = new ClientUserDto(clientUser.firstName, clientUser.lastName);
        return new ClientUserResponseDto(clientUser.userId, responseUser);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'Update a specific user', type: ClientUserResponseDto })
    editUser(@Param('id') userId: string, @Body() userDto: ClientUserDto): ClientUserResponseDto {
        return new ClientUserResponseDto(userId, userDto);
    }
}

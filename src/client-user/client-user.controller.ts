import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {ClientUserDto} from "./dto/client-user-dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {ClientUserResponseDto} from "./dto/client-user-response-dto";

@ApiTags('user')
@Controller('user')
export class ClientUserController {
    @Post()
    @ApiResponse({ status: 200, description: 'Create a user', type: ClientUserResponseDto })
    createUser(@Body() userDto: ClientUserDto): ClientUserResponseDto {
        return new ClientUserResponseDto("user_id", userDto);
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'Fetch a specific user', type: ClientUserResponseDto })
    getUser(@Param('id') id: string): ClientUserResponseDto {
        const userId: string = "sample_user_id";
        const firstName: string = "sample_first_name";
        const lastName: string = "sample_first_name";
        const middleName: string = "sample_first_name";
        const forwardAddressLine: string = "sample_first_name";
        const authorizedPickupFirstName: string = "sample_first_name";
        const authorizedPickupLastName: string = "sample_first_name";
        const profileImageId: string = "sample_profile_id";

        const user: ClientUserDto = new ClientUserDto(firstName,
            lastName,
            middleName,
            forwardAddressLine,
            authorizedPickupFirstName,
            authorizedPickupLastName,
            profileImageId);

        return new ClientUserResponseDto(userId, user);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'Update a specific user', type: ClientUserResponseDto })
    editUser(@Param('id') userId: string, @Body() userDto: ClientUserDto): ClientUserResponseDto {
        return new ClientUserResponseDto(userId, userDto);
    }
}

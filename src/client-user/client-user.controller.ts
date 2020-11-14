import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {ClientUserDto} from "./dto/client-user-dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('user')
@Controller('user')
export class ClientUserController {
    @Post()
    createUser(@Body() createCatDto: ClientUserDto): ClientUserDto {
        return createCatDto;
    }

    @Get(':id')
    getUser(@Param('id') id: string): ClientUserDto {
        const userId: string = "sample_user_id";
        const firstName: string = "sample_first_name";
        const lastName: string = "sample_first_name";
        const middleName: string = "sample_first_name";
        const forwardAddressLine: string = "sample_first_name";
        const authorizedPickupFirstName: string = "sample_first_name";
        const authorizedPickupLastName: string = "sample_first_name";
        const profileImageId: string = "sample_profile_id";
        return new ClientUserDto(userId,
            firstName,
            lastName,
            middleName,
            forwardAddressLine,
            authorizedPickupFirstName,
            authorizedPickupLastName,
            profileImageId);
    }

    @Put(':id')
    editUser(@Param('id') id: string): ClientUserDto {
        const userId: string = "sample_user_id";
        const firstName: string = "edited_first_name";
        const lastName: string = "edited_first_name";
        const middleName: string = "edited_first_name";
        const forwardAddressLine: string = "edited_first_name";
        const authorizedPickupFirstName: string = "edited_first_name";
        const authorizedPickupLastName: string = "edited_first_name";
        const profileImageId: string = "edited_profile_id";
        return new ClientUserDto(userId,
            firstName,
            lastName,
            middleName,
            forwardAddressLine,
            authorizedPickupFirstName,
            authorizedPickupLastName,
            profileImageId);
    }
}

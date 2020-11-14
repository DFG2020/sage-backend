import {Body, Controller, Get, Param, Post, Put, Query} from '@nestjs/common';
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
        const firstName: string = "sample_first_name";
        const lastName: string = "sample_first_name";
        const middleName: string = "sample_first_name";
        const forwardAddressLine: string = "sample_first_name";
        const authorizedPickupFirstName: string = "sample_first_name";
        const authorizedPickupLastName: string = "sample_first_name";
        const profileImageId: string = "sample_profile_id";
        return new ClientUserDto(firstName,
            lastName,
            middleName,
            forwardAddressLine,
            authorizedPickupFirstName,
            authorizedPickupLastName,
            profileImageId);
    }

    @Put(':id')
    editUser(@Param('id') id: string): ClientUserDto {
        const firstName: string = "edited_first_name";
        const lastName: string = "edited_first_name";
        const middleName: string = "edited_first_name";
        const forwardAddressLine: string = "edited_first_name";
        const authorizedPickupFirstName: string = "edited_first_name";
        const authorizedPickupLastName: string = "edited_first_name";
        const profileImageId: string = "edited_profile_id";
        return new ClientUserDto(firstName,
            lastName,
            middleName,
            forwardAddressLine,
            authorizedPickupFirstName,
            authorizedPickupLastName,
            profileImageId);
    }

    @Get()
    searchUser(@Query('last_name') last_name: string): Array<ClientUserDto> {
        const editUser: ClientUserDto = new ClientUserDto("edited_first_name",
            "edited_first_name",
            "edited_first_name",
            "edited_first_name",
            "edited_first_name",
            "edited_first_name",
            "edited_profile_id");

        const newUser: ClientUserDto = new ClientUserDto("new_first_name",
            "new_first_name",
            "new_first_name",
            "new_first_name",
            "new_first_name",
            "new_first_name",
            "new_profile_id");

        const results: Array<ClientUserDto> = [];
        results.push(editUser);
        results.push(newUser);

        return results;
    }
}

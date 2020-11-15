import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {ClientMailDto, MailStatus, MailType} from "./dto/client-mail-dto";
import {ClientMailResponseDto} from "./dto/client-mail-response-dto";

@ApiTags('mail')
@Controller('mail')
export class ClientMailController {
    @Post()
    @ApiResponse({ status: 200, description: 'Create a mail entry for a user', type: ClientMailResponseDto })
    createMail(@Body() mailDto: ClientMailDto): ClientMailResponseDto {
        return new ClientMailResponseDto("mail_id", mailDto);
    }

    @Put(':mail_id')
    @ApiResponse({ status: 200, description: 'Update a specific mail entry', type: ClientMailResponseDto })
    editUser(@Param('mail_id') mail_id: string, @Body() mailDto: ClientMailDto): ClientMailResponseDto {
        return new ClientMailResponseDto(mail_id, mailDto);
    }

    @Get('user/:user_id')
    @ApiResponse({ status: 200, description: 'Fetch all mail for a user', type: [ClientMailResponseDto] })
    getUser(@Param('user_id') user_id: string): ClientMailResponseDto[] {
        const results: ClientMailResponseDto[] = [];

        results.push(new ClientMailResponseDto('mail_id_1',
            new ClientMailDto(user_id, Date.now(), "SS", MailStatus.PENDING_PICKUP, MailType.LARGE_MAIL)
        ));

        results.push(new ClientMailResponseDto('mail_id_2',
            new ClientMailDto(user_id,
                Date.now(),
                "SS",
                MailStatus.PICKED_UP_CLIENT_USER,
                MailType.PARCEL,
                "FEDEX",
                "This is a comment",
                Date.now(),
                "1A2B3C4D5E")
        ));

        return results;
    }
}

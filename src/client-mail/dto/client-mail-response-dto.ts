import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString, ValidateNested} from "class-validator";
import {ClientUserDto} from "../../client-user/dto/client-user-dto";
import {ClientMailDto} from "./client-mail-dto";

export class ClientMailResponseDto {
    constructor(mailId: string,
                mail: ClientMailDto) {
        this.mailId = mailId;
        this.mail = mail;
    }

    @ApiProperty({
        description: "The unique identifier for the mail.",
        type: String
    })
    @IsNotEmpty()
    @IsString()
    readonly mailId: string;

    @ApiProperty({
        description: "Represents the user's profile",
        type: ClientUserDto
    })
    @IsNotEmpty()
    @ValidateNested()
    readonly mail: ClientMailDto;
}

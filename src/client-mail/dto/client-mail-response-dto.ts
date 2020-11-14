import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString, ValidateNested} from "class-validator";
import {ClientMailDto} from "./client-mail-dto";

/**
 * Represents a client mail for responses.
 */
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
        description: "Represents the data for mail",
        type: ClientMailDto
    })
    @IsNotEmpty()
    @ValidateNested()
    readonly mail: ClientMailDto;
}

import {IsNotEmpty, IsString, ValidateNested} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {ClientUserDto} from "./client-user-dto";

/**
 * Represents a client user for responses.
 */
export class ClientUserResponseDto {
    constructor(userId: string,
                user: ClientUserDto) {
        this.userId = userId;
        this.user = user;
    }

    @ApiProperty({
        description: "The unique identifier for the user.",
        type: String
    })
    @IsNotEmpty()
    @IsString()
    readonly userId: string;

    @ApiProperty({
        description: "Represents the user's profile",
        type: ClientUserDto
    })
    @IsNotEmpty()
    @ValidateNested()
    readonly user: ClientUserDto;
}

import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, ValidateNested} from "class-validator";
import {ClientUserDto} from "../../client-user/dto/client-user-dto";

/**
 * Payload for the search results.
 */
export class UserSearchResultDto {
    constructor(user: ClientUserDto,
                totalMailCount: number,
                totalNewMailCount: number) {
        this.user = user;
        this.totalMailCount = totalMailCount;
        this.totalNewMailCount = totalNewMailCount;
    }

    @ApiProperty({
        description: "Represents the user's profile",
        type: [ClientMailDto]
    })
    @IsNotEmpty()
    @ValidateNested()
    readonly user: ClientUserDto;

    @ApiProperty({
        description: "The total number of mails the user has.",
        type: Number
    })
    @IsNotEmpty()
    @ValidateNested()
    readonly totalMailCount: number;

    @ApiProperty({
        description: "The total number of new mail the user has.",
        type: Number
    })
    @IsNotEmpty()
    @ValidateNested()
    readonly totalNewMailCount: number;
}

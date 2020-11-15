import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

/**
 * Represents a client user for all request/responses.
 */
export class ClientUserDto {
    constructor(firstName: string,
                lastName: string,
                middleName?: string,
                forwardAddressLine?: string,
                authorizedPickupFirstName?: string,
                authorizedPickupLastName?: string,
                profile_image_id?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.forwardAddressLine = forwardAddressLine;
        this.authorizedPickupFirstName = authorizedPickupFirstName;
        this.authorizedPickupLastName = authorizedPickupLastName;
        this.profile_image_id = profile_image_id;
    }

    @ApiProperty({
        description: "The first name of the user.",
        type: String
    })
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @ApiProperty({
        description: "The last name of the user.",
        type: String
    })
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @ApiPropertyOptional({
        description: "The middle name of the user. This field is optional.",
        type: String
    })
    @IsOptional()
    @IsString()
    readonly middleName?: string;

    @ApiPropertyOptional({
        description: "The forward address for the user, in case a mail cannot be delivered. This field is optional.",
        type: String
    })
    @IsOptional()
    @IsString()
    readonly forwardAddressLine?: string;

    @ApiPropertyOptional({
        description: "The first name for the person who is authorized to have the mail forwarded to them. " +
            "This field is optional.",
        type: String
    })
    @IsOptional()
    @IsString()
    readonly authorizedPickupFirstName?: string;

    @ApiPropertyOptional({
        description: "The last name for the person who is authorized to have the mail forwarded to them. " +
            "This field is optional.",
        type: String
    })
    @IsOptional()
    @IsString()
    readonly authorizedPickupLastName?: string;

    @ApiPropertyOptional({
        description: "The image ID for the user's profile. This ID must be provided by the backend. " +
            "This field is optional.",
        type: String
    })
    @IsOptional()
    @IsString()
    readonly profile_image_id?: string;
}

import {IsNotEmpty, IsOptional, IsString} from "class-validator";

/**
 * Represents a client user for all request/responses.
 */
export class ClientUserDto {
    constructor(firstName: string,
                lastName: string,
                middleName: string,
                forwardAddressLine: string,
                authorizedPickupFirstName: string,
                authorizedPickupLastName: string,
                profile_image_id: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.forwardAddressLine = forwardAddressLine;
        this.authorizedPickupFirstName = authorizedPickupFirstName;
        this.authorizedPickupLastName = authorizedPickupLastName;
        this.profile_image_id = profile_image_id;
    }

    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    readonly lastName: string;

    @IsOptional()
    @IsString()
    readonly middleName: string;

    @IsOptional()
    @IsString()
    readonly forwardAddressLine: string;

    @IsOptional()
    @IsString()
    readonly authorizedPickupFirstName: string;

    @IsOptional()
    @IsString()
    readonly authorizedPickupLastName: string;

    @IsOptional()
    @IsString()
    readonly profile_image_id: string;
}

import {IsEmpty, IsNotEmpty} from "class-validator";

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
    readonly firstName: string;

    @IsNotEmpty()
    readonly lastName: string;

    @IsEmpty()
    readonly middleName: string;

    @IsEmpty()
    readonly forwardAddressLine: string;

    @IsEmpty()
    readonly authorizedPickupFirstName: string;

    @IsEmpty()
    readonly authorizedPickupLastName: string;

    @IsEmpty()
    readonly profile_image_id: string;
}

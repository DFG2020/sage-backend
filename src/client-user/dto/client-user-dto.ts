import {IsEmpty, IsNotEmpty} from "class-validator";

/**
 * Represents a client user for all request/responses.
 */
export class ClientUserDto {
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
}

import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";

/**
 * All statuses for the mail.
 */
export enum MailStatus {
    MAIL_FORWARDED = 'MAIL_FORWARDED',
    PENDING_PICKUP = 'PENDING_PICKUP',
    PICKED_UP_CLIENT_USER = 'PICKED_UP_CLIENT_USER',
    PICKED_UP_FORWARD_USER = 'PICKED_UP_FORWARD_USER',
    RETURNED_TO_SEND = 'RETURNED_TO_SEND',
}

/**
 * Represents a client mail for all request/responses.
 */
export class ClientMailDto {
    constructor(userId: string,
                receivedDateTimeMs: number,
                staffInitial: string,
                type: MailStatus,
                fulfillmentProvider?: string,
                comment?: string,
                pickedUpDateTimeMs?: number,
                signatureImageId?: string) {
        this.userId = userId;
        this.receivedDateTimeMs = receivedDateTimeMs;
        this.staffInitial = staffInitial;
        this.type = type;
        this.fulfillmentProvider = fulfillmentProvider;
        this.comment = comment;
        this.pickedUpDateTimeMs = pickedUpDateTimeMs;
        this.signatureImageId = signatureImageId;
    }

    @ApiProperty({
        description: "The unique identifier for the user.",
        type: String
    })
    @IsNotEmpty()
    @IsString()
    readonly userId: string;

    @ApiProperty({
        description: 'The datetime, in milliseconds, that the mail was received.',
        type: Number
    })
    @IsNotEmpty()
    @IsNumber()
    readonly receivedDateTimeMs: number;

    @ApiProperty({
        description: 'The initials for the staff member who received that mail.',
        type: String,
        example: 'SS'
    })
    @IsNotEmpty()
    @IsString()
    readonly staffInitial: string;

    @ApiProperty({
        description: 'The status of the mail.',
        enum: MailStatus,
        example: MailStatus.PICKED_UP_CLIENT_USER
    })
    @IsOptional()
    @IsString()
    readonly type: MailStatus;

    @ApiPropertyOptional({
        description: 'The fulfillment provider who brought the mail.',
        type: String,
        example: 'FEDEX'
    })
    @IsOptional()
    @IsString()
    readonly fulfillmentProvider?: string;

    @ApiPropertyOptional({
        description: 'A description of the mail. Can be used by employees to leave notes for each other.',
        type: String
    })
    @IsOptional()
    @IsString()
    readonly comment?: string;

    @ApiPropertyOptional({
        description: 'The datetime, in milliseconds, that the mail was received.',
        type: Number
    })
    @IsOptional()
    @IsNumber()
    readonly pickedUpDateTimeMs?: number;

    @ApiPropertyOptional({
        description: 'The image Id of the signature for the user who picked up the mail. ' +
            'The id must be provided by the backend.',
        type: String
    })
    @IsOptional()
    @IsString()
    readonly signatureImageId?: string;
}
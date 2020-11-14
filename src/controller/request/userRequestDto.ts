import { Expose } from "class-transformer";
import { IsDefined, IsNotEmpty, IsOptional, ValidateNested } from "class-validator";
import AddressDto from "./addressDto";

class UserRequestDto {
    @Expose()
    @IsNotEmpty()
    public firstName: string;

    @Expose()
    @IsNotEmpty()
    public lastName: string;

    @Expose()
    @IsOptional()
    public middleName: string;

    @Expose()
    @IsDefined()
    @ValidateNested()
    public address: AddressDto;
}

export default UserRequestDto;

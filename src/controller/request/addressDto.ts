import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

class AddressDto {
    @Expose()
    @IsNotEmpty()
    public addressLineOne: string;

    @Expose()
    @IsOptional()
    public addressLineTwo: string;
}

export default AddressDto;

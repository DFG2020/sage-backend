import {Body, Controller, Post} from '@nestjs/common';
import {ClientUserDto} from "./dto/client-user-dto";

@Controller('user')
export class ClientUserController {
    @Post()
    create(@Body() createCatDto: ClientUserDto): ClientUserDto {
        return createCatDto;
    }
}

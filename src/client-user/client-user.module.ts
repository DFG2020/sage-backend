import {Module} from '@nestjs/common';
import {ClientUserController} from './client-user.controller';
import {ClientUserService} from './client-user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ClientUser} from "./entity/client-user.entity";
import {ClientUserResponseDtoAdapter} from "./adapter/client-user-response-dto-adapter";
import {ClientUserDtoAdapter} from "./adapter/client-user-dto-adapter";

@Module({
  imports: [TypeOrmModule.forFeature([ClientUser])],
  controllers: [ClientUserController],
  providers: [ClientUserService, ClientUserResponseDtoAdapter, ClientUserDtoAdapter]
})
export class ClientUserModule {}

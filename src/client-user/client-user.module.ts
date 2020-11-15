import {Module} from '@nestjs/common';
import {ClientUserController} from './client-user.controller';
import {ClientUserService} from './client-user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ClientUser} from "./entity/client-user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ClientUser])],
  controllers: [ClientUserController],
  providers: [ClientUserService]
})
export class ClientUserModule {}

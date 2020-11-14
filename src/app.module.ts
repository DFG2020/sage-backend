import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientUserModule} from './client-user/client-user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ClientMailModule } from './client-mail/client-mail.module';
import { ImageManagementModule } from './image-management/image-management.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClientUserModule, ClientMailModule, ImageManagementModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

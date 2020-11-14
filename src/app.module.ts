import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientUserModule } from './client-user/client-user.module';

@Module({
  imports: [ClientUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

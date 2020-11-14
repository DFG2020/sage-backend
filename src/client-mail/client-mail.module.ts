import { Module } from '@nestjs/common';
import { ClientMailController } from './client-mail.controller';
import { ClientMailService } from './client-mail.service';

@Module({
  controllers: [ClientMailController],
  providers: [ClientMailService]
})
export class ClientMailModule {}

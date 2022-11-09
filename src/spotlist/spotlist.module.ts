import { Module } from '@nestjs/common';
import { SpotlistController } from './spotlist.controller';
import { SpotlistService } from './spotlist.service';

@Module({
  controllers: [SpotlistController],
  providers: [SpotlistService]
})
export class SpotlistModule {}

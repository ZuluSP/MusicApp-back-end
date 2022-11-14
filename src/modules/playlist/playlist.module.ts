import { Module } from '@nestjs/common';
import { PlayListController } from './infra/controllers/playlist.controller';


@Module({
  imports: [],
  controllers: [PlayListController],
  providers: [],
})
export class PlaylistModule {}

import { Module } from '@nestjs/common';
import { PlaylistModule } from './modules/playlist/playlist.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [UsersModule, PlaylistModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

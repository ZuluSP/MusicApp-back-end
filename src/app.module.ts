import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotlistModule } from './spotlist/spotlist.module';

@Module({
  imports: [SpotlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

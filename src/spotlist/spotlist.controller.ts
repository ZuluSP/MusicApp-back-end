import { Controller, Get, Post, Put, Delete, Res } from '@nestjs/common';

@Controller('spotlist')
export class SpotlistController {
  @Post('/create')
  createSong(@Res() res) {
    res.status();
  }
}

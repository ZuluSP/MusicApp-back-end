import { Module } from '@nestjs/common';
import { UserController } from './infra/controllers/User.controller';
import { UserRepoImpl } from './repo/Implementation/UserRepoImpl';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepoImpl],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { FakeUsersService } from './fake-users.service';
import { FakeUsersController } from './fake-users.controller';
import  * as users from './users.json';

@Module({
  controllers: [FakeUsersController],
  providers: [{ provide: 'FAKEUSERS', useValue: users}, FakeUsersService],
})
export class FakeUsersModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FakeUsersModule } from './fake-users/fake-users.module';

@Module({
  imports: [FakeUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

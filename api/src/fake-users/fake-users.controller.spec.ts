import { Test, TestingModule } from '@nestjs/testing';
import { FakeUsersController } from './fake-users.controller';
import { FakeUsersService } from './fake-users.service';

describe('FakeUsersController', () => {
  let controller: FakeUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FakeUsersController],
      providers: [FakeUsersService],
    }).compile();

    controller = module.get<FakeUsersController>(FakeUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FakeUsersService } from './fake-users.service';

describe('FakeUsersService', () => {
  let service: FakeUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakeUsersService],
    }).compile();

    service = module.get<FakeUsersService>(FakeUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

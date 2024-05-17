import { Injectable, Inject } from '@nestjs/common';
import { CreateFakeUserDto } from './dto/create-fake-user.dto';
import { UpdateFakeUserDto } from './dto/update-fake-user.dto';
import { FakeUser } from './entities/fake-user.entity';
import { randomUUID } from 'crypto';
@Injectable()
export class FakeUsersService {

  constructor(@Inject('FAKEUSERS') private fakeUsers: FakeUser[] ){}

  create(createFakeUserDto: CreateFakeUserDto): Promise<FakeUser> {
    const newUser = {id: randomUUID(), ...createFakeUserDto}
    this.fakeUsers.push(newUser);
    return Promise.resolve(newUser);
  }

  findAll() : Promise<FakeUser[]> {
    return Promise.resolve(this.fakeUsers)
  }

  findOne(id: string) : Promise<FakeUser>{
    const user = this.fakeUsers.find((user) => user.id === id);
    return Promise.resolve(user);
  }

  update(id: string, updateFakeUserDto: UpdateFakeUserDto) : Promise<FakeUser[]> {
    this.fakeUsers.forEach(user => {
      if (user.id === id)
        Object.assign(user, {...user, ...updateFakeUserDto})
    });

    return Promise.resolve(this.fakeUsers);
  }

  remove(id: string) : Promise<FakeUser> {
    const useridx = this.fakeUsers.findIndex(user => user.id === id)
    const user = this.fakeUsers.find(user => user.id === id)
    this.fakeUsers.splice(useridx, 1);
    
    return Promise.resolve(user);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FakeUsersService } from './fake-users.service';
import { CreateFakeUserDto } from './dto/create-fake-user.dto';
import { UpdateFakeUserDto } from './dto/update-fake-user.dto';

@Controller('/api/user')
export class FakeUsersController {
  constructor(private readonly fakeUsersService: FakeUsersService) {}

  @Post()
  create(@Body() createFakeUserDto: CreateFakeUserDto) {
    return this.fakeUsersService.create(createFakeUserDto);
  }

  @Get()
  findAll() {
    return this.fakeUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fakeUsersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFakeUserDto: UpdateFakeUserDto) {
    return this.fakeUsersService.update(id, updateFakeUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fakeUsersService.remove(id);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateFakeUserDto } from './create-fake-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFakeUserDto extends PartialType(CreateFakeUserDto) {
}

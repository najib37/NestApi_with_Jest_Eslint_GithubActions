import { ApiProperty } from "@nestjs/swagger";

export class CreateFakeUserDto {
    @ApiProperty({ description: 'the name of the user you want to create' })
    "name": string;
    @ApiProperty({ description: 'the email of the user you want to create' })
    "email": string;
    @ApiProperty({ description: 'the username of the user you want to create' })
    "username": string;
}

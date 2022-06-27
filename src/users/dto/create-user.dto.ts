import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
	firebase_id: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;

	@ApiProperty()
	image: string;

    @ApiProperty()
	name: string;
}
import { IsDefined, IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class RegisterDto {
	@IsDefined()
	@IsNotEmpty()
	@IsEmail()
	email: string

	@IsDefined()
	@IsNotEmpty()
	@MinLength(6)
	password: string
}
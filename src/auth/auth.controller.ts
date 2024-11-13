import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { RegisterDto } from "./dtos/register.dto"

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {
	}

	@Post()
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}

}

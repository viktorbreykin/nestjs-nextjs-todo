import { Injectable } from '@nestjs/common';
import { RegisterDto } from "./dtos/register.dto"

@Injectable()
export class AuthService {

	async register(dto: RegisterDto) {

	}

}

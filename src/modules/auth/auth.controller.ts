import { Body, Controller, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { response } from "express";

interface IUserLogin {
  email: string;
  password: string;
}

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('')
  async login(@Body() user: IUserLogin) {
    const result = this.authService.login(user.email, user.password);
    if (result == null) return response.status(HttpStatus.UNAUTHORIZED);
    return result;
  }
}

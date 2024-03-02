/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshJwtGuard } from './guard/refresh-jwt.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  signRefreshToken(@Request() req: any) {
    return this.authService.signRefreshToken(req.user);
  }

  //Authen by Google
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req: any) {}

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Request() req: any) {
    return this.authService.googleLogin(req);
  }


  //Authen with Phone Number
  @Post('verifyPhoneNumber')
  async verifyPhoneNumber(@Body() body: { phoneNumber: string; firebaseToken: string }) {
    const { phoneNumber, firebaseToken } = body;
    const isPhoneNumberValid = await this.authService.verifyPhoneNumber(phoneNumber, firebaseToken);
    if (isPhoneNumberValid) {
      return { message: 'Phone number verified successfully.' };
    } else {
      throw new Error('Phone number verification failed. Please make sure your credentials are correct.');
    }
  }
}

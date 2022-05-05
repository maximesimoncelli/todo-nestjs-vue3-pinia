import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Req() req: Request,
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('cookies', req.cookies);
    const token = await this.authService.signUp(dto);
    response.cookie('access_token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    return token;
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(
    @Req() req: Request,
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log(req.cookies, req.signedCookies);
    const token = await this.authService.signIn(dto);
    response.cookie('access_token', token, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    return token;
  }
}

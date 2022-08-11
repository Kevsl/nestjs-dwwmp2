import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  async register(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
  }

  login() {
    return { msg: 'Login successfull' };
  }
}

// const service = new AuthService();

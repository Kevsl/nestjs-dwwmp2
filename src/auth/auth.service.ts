import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register() {
    return { msg: 'Registration successfull' };
  }

  login() {
    return { msg: 'Login successfull' };
  }
}

// const service = new AuthService();

import { Injectable } from '@nestjs/common';

@Injectable()
export class CofeeService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class BikesService {
  getHello(): string {
    return 'Hello World!';
  }
}

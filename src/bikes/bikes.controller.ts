import { Controller, Get, Post } from '@nestjs/common';
import { BikesService } from './bikes.service';

@Controller()
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Post('/hello')
  getHello(): string {
    return this.bikesService.getHello();
  }
}

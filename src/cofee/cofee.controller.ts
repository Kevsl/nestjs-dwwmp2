import { Controller, Get, Post } from '@nestjs/common';
import { CofeeService } from './cofee.service';

@Controller()
export class CofeeController {
  constructor(private readonly cofeeService: CofeeService) {}

  @Post('/hello')
  getHello(): string {
    return this.cofeeService.getHello();
  }
}

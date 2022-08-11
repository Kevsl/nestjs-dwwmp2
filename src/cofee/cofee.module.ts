import { Module } from '@nestjs/common';
import { CofeeService } from './cofee.service';
import { CofeeController } from './cofee.controller';
@Module({
  imports: [],
  controllers: [CofeeController],
  providers: [CofeeService],
})
export class CofeeModule {}

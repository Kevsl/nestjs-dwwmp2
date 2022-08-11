import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BikesModule } from './bikes/bikes.module';
import { CofeeModule } from './cofee/cofee.module';

@Module({
  imports: [AuthModule, BikesModule, CofeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

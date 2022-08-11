import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BikesModule } from './bikes/bikes.module';
import { CofeeModule } from './cofee/cofee.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, BikesModule, CofeeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

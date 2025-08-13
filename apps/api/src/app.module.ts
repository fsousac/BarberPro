import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaMopd}
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, Auth],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

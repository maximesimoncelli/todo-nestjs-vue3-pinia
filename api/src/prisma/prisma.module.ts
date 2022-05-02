import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [ConfigService],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

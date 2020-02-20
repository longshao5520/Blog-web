import { Module } from '@nestjs/common';
import { CatesController } from './cates.controller';

@Module({
  controllers: [CatesController]
})
export class CatesModule {}

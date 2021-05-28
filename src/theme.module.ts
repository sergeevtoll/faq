import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Theme } from './database/entity/theme';

@Module({
  imports: [TypeOrmModule.forFeature([Theme])],
  providers: [],
  controllers: [],
})
export class UsersModule {}
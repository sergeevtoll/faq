import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeService } from './theme.service';
import { ThemeController } from './theme.controller';
import { Theme } from '../database/entity/theme';
import { ThemeSchema } from './theme.schema'

@Module({
  imports: [TypeOrmModule.forFeature([ThemeSchema])],
  providers: [ThemeService],
  controllers: [ThemeController],
})

export class ThemeModule {}
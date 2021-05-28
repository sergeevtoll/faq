import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Theme } from './database/entity/theme';
import { Answer } from './database/entity/answer';
import { Question } from './database/entity/question';
import { ThemeController } from './theme/theme.controller';
import { ThemeService } from './theme/theme.service';
import { ThemeModule } from './theme/theme.module'

@Module({
  imports: [TypeOrmModule.forRoot(
    {
    host: "localhost",
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "Ghjcnjq2611",
    database: "test",
    entities: [Theme,Answer,Question],
    synchronize: true,
    logging: true
  }
  ), ThemeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

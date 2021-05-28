import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('faq')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return 'Huuuuuii';
  }
}

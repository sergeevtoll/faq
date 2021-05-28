import { Controller,Post,Body,  Get , Req, Request} from '@nestjs/common';
import { ThemeService } from './theme.service';

interface Themes{
  text:string
}

@Controller('theme')
export class ThemeController {
  constructor(private themeService:ThemeService){}


  @Post()
    async create(theme:Themes){
      this.themeService.create(theme)
    }

  @Get()
    async findaLL():Promise<Themes[]>{
      return this.themeService.findAll()
    }
}

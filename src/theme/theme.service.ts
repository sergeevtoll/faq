import { Injectable } from '@nestjs/common';
import { Connection }  from 'typeorm'

interface Themes{
  text:string
}


@Injectable()
export class ThemeService {
   themes:Themes[]=[]

  create(theme:Themes){
    this.themes.push(theme)
  }

  findAll():Themes[]{
    return this.themes
  }
}

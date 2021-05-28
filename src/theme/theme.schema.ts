import { EntitySchema } from 'typeorm'
import { Theme } from '../database/entity/theme'

export const ThemeSchema = new EntitySchema<Theme>({
  name: 'Theme',
  columns: {
  themeText:{
    type:String
  }
  }
});


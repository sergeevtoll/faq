import { createConnection } from "typeorm";
import { Theme } from "../database/entity/Theme";

const theme = new Theme()
theme.themeText = 'hui'

console.log(theme)





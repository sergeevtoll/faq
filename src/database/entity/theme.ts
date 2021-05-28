import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Question } from './question'

@Entity()
export class Theme {
  @PrimaryGeneratedColumn  ()
    id: string
  @Column('text')
    themeText:string
  @OneToMany(type=>Question, question => question.theme)
    questions:Question[]
}

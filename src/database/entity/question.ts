import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinTable  } from "typeorm";
import { Theme } from './theme';
import { Answer } from './answer';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
    id:string
  @Column('text')
    questionText:string
  @ManyToOne(type=>Theme, theme=>theme.questions)
  @JoinTable()
    theme:Theme
  @OneToOne(type=>Answer) 
    answer:Answer
}

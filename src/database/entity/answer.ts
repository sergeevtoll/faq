import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinTable } from "typeorm";
import { Question } from "./question";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
    id:string
  @Column('text')
    answerText:string
  @OneToOne(type=>Question)  
  @JoinTable()
    question:Question
}

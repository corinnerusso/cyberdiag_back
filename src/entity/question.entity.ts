import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Topic } from "./topic.entity";
import { Answer } from "./answer.entity";

// Create tables

@Entity("question")
export class Question {
  @PrimaryGeneratedColumn({ type: "int" })
  questionId!: number;

  @Column({ type: "varchar", length: 500, nullable: true })
  question_title!: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  comments!: string;

  @ManyToOne(
    type => Topic,
    topic => topic.questions
  )
  topic: Topic | undefined;

  @ManyToMany(type => Answer)
  @JoinTable()
  answers: Answer[] | undefined;
}

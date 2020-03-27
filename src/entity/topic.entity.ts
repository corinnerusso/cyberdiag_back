import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";
import { Model } from "./model.entity";
import { Question } from "./question.entity";

// Create tables

@Entity("topic")
export class Topic {
  @PrimaryGeneratedColumn({ type: "int" })
  topicId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  topic_title!: string;

  @ManyToMany(type => Model)
  @JoinTable()
  models: Model[] | undefined;

  @OneToMany(
    type => Question,
    question => question.topic
  )
  questions: Question[] | undefined;
}

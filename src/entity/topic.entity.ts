import {
  Column,
  Entity,
  PrimaryGeneratedColumn,

  OneToMany
} from "typeorm";

import { Question } from "./question.entity";

// Create tables

@Entity("topic")
export class Topic {
  @PrimaryGeneratedColumn({ type: "int" })
  topicId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  topic_title!: string;

  @Column({ type: "int", nullable: true })
  topic_max_quote!: number;

  @OneToMany(
    type => Question,
    question => question.topic
  )
  questions: Question[] | undefined;
  static topicId: any;
}

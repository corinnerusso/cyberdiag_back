import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable } from "typeorm";
import { Survey } from './survey.entity'

// Create tables

@Entity("submission")
export class Submission {
  @PrimaryGeneratedColumn({ type: "int" })
  submissionId!: number;

  @Column({ type: "int", nullable: true })
  userId!: number;



  @Column({ type: "int", nullable: true })
  modelId!: number;

  @Column({ type: "varchar", length: 250, nullable: true })
  topicId!: string;

  @Column({ type: "int", nullable: true })
  questionId!: number;

  @Column({ type: "int", nullable: true })
  answerId!: number;

  @Column({ type: "int", nullable: true })
  answerQuote!: number;

  @Column({ type: "varchar", length: 250, nullable: true })
  surveyTitle!: number;

  @Column({ type: "varchar", length: 250, nullable: true })
  topicTitle!: number;

  @Column({ type: "int", nullable: true })
  topicQuote!: number;

  @ManyToOne(type => Survey, Survey => Survey.submissions, { onDelete: "CASCADE" })
  // user: User | undefined;

  @JoinTable()
  survey: Survey[] | undefined;

}

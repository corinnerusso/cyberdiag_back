import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable } from "typeorm";
import { Survey } from './survey.entity'

// Create submission entity

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

  //Join suvey entity with many to one link
  @ManyToOne(type => Survey, Survey => Survey.submissions, { onDelete: "CASCADE" })
  @JoinTable()
  survey: Survey[] | undefined;

}

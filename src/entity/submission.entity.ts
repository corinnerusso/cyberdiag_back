import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Create tables

@Entity("submission")
export class Submission {
  @PrimaryGeneratedColumn({ type: "int" })
  submissionId!: number;

  @Column({ type: "int", nullable: true })
  userId!: number;

  @Column({ type: "int", nullable: true })
  surveyId!: number;

  @Column({ type: "int", nullable: true })
  answerId!: number;

  @Column({ type: "varchar", length: 250, nullable: true })
  topicId!: string;
}

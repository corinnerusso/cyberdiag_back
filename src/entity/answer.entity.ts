import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Create answer entity

@Entity("answer")
export class Answer {
  @PrimaryGeneratedColumn({ type: "int" })
  answerId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  answer_title!: string;

  @Column({ type: "int", nullable: true })
  answer_quote!: string;
}

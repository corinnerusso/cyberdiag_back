import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable
} from "typeorm";
import { Company } from "./company.entity";
// Create tables

@Entity("survey")
export class Survey {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 250, nullable: true })
  survey_title!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  client_name!: string;

  @Column({ type: "date", nullable: true })
  creation_date!: string;

  @Column({ type: "int", nullable: true })
  userId!: number;

  @ManyToOne(
    type => Company,
    Company => Company.surveys
  )
  @JoinTable()
  company: Company[] | undefined;
}

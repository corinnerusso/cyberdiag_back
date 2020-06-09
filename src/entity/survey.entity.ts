import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  JoinColumn
} from "typeorm";
import { Company } from "./company.entity";
import { User } from "./user.entity"
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
  survey_creation_date!: string;

  @Column({ type: 'boolean', default: false })
  has_a_survey!: boolean;

  @ManyToOne(
    type => Company,
    Company => Company.surveys
  )
  @JoinTable()
  company: Company[] | undefined;

  @ManyToOne(type => User, User => User.surveys)
  // user: User | undefined;

  @JoinTable()
  user: User[] | undefined;
}

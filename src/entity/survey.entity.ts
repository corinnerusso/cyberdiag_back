import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToMany

} from "typeorm";
import { Company } from "./company.entity";
import { User } from "./user.entity";
import { Submission } from "./submission.entity"
// Create survey entity

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


  //Join company entity with many to one link
  @ManyToOne(
    type => Company,
    Company => Company.surveys
  )
  @JoinTable()
  company: Company[] | undefined;


  //Join survey entity with many to one link
  @ManyToOne(type => User, User => User.surveys, { onDelete: "CASCADE" })
  @JoinTable()
  user: User[] | undefined;


  //Join submission entity with one to many link
  @OneToMany(
    type => Submission,
    submission => submission.survey
  )
  @JoinTable()
  submissions: Submission[] | undefined;

}

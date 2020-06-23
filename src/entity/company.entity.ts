import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable
} from "typeorm";
import { Model } from "./model.entity";
import { Survey } from "./survey.entity";

// Create company entity

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn({ type: "int" })
  companyId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  company_type!: string;


  //Join model entity with one to many link
  @OneToMany(
    type => Model,
    model => model.company
  )
  models: Model[] | undefined;


  //Join survey entity with one to many link
  @OneToMany(
    type => Survey,
    survey => survey.company
  )
  @JoinTable()
  surveys: Survey[] | undefined;
}

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable
} from "typeorm";
import { Model } from "./model.entity";
import { Survey } from "./survey.entity";
// Create tables

@Entity("company")
export class Company {
  @PrimaryGeneratedColumn({ type: "int" })
  companyId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  company_type!: string;

  @OneToMany(
    type => Model,
    model => model.company
  )
  models: Model[] | undefined;

  @OneToMany(
    type => Survey,
    survey => survey.company
  )
  @JoinTable()
  surveys: Survey[] | undefined;
}

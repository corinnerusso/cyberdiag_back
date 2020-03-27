import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from "typeorm";
import { Company } from "./company.entity";
import { Topic } from "./topic.entity";

// Create tables

@Entity("model")
export class Model {
  @PrimaryGeneratedColumn({ type: "int" })
  modelId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  model_title!: string;

  @ManyToOne(
    type => Company,
    company => company.models
  )
  company: Company[] | undefined;

  @ManyToMany(type => Topic)
  @JoinTable()
  topics: Topic[] | undefined;
}

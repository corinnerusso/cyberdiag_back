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

// Create mdeol entity

@Entity("model")
export class Model {
  @PrimaryGeneratedColumn({ type: "int" })
  modelId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  model_title!: string;


  //Join company entity with many to one link
  @ManyToOne(
    type => Company,
    company => company.models
  )
  company: Company[] | undefined;


  //Join topic entity with many to many link
  @ManyToMany(type => Topic)
  @JoinTable()
  topics: Topic[] | undefined;
}

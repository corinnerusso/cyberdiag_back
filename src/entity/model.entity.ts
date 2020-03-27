import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Company } from "./company.entity";

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
}

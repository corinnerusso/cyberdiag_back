import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Survey } from "./survey.entity"
// Create tables

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  userId!: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  lastname!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  firstname!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  email!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  password!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cieName!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  phoneNumber!: string;

  @Column({ type: "boolean", default: false })
  CGU!: boolean;

  @Column({ type: "int", default: 0 })
  isAdmin!: number;

  @OneToMany(
    type => Survey,
    survey => survey.user
  )
  surveys: Survey[] | undefined;
  static topicId: any;
}

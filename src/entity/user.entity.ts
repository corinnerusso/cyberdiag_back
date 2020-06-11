import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinTable } from "typeorm";
import { Survey } from "./survey.entity"
// Create tables

//Dertermine which are the different roles of a user
export enum UserRole {
  GHOST = 'ghost',
  USER = 'user',
  ADMIN = 'admin',
}

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 255, nullable: true })
  lastname!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  firstname!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  email!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  password!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  cie_name!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  phone_number!: string;

  @Column({ type: "boolean", default: false })
  legal_terms!: boolean;

  /*Admin role initiated to false by default*/
  @Column({ type: "int", default: 0 })
  is_admin!: number;

  @Column({ type: "date", nullable: true })
  user_creation_date!: string;

  @Column({ type: "varchar", length: 500, nullable: true })
  comments!: string;

  /*Initiate a ghost role for who is not an admin*/
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GHOST,
  })
  role!: UserRole;

  // Pas from false to true when a user has clicked on the link of the confirmation mail
  @Column({ type: 'boolean', default: false })
  activated!: boolean;

  @OneToMany(
    type => Survey,
    survey => survey.user
  )
  @JoinTable()
  surveys: Survey[] | undefined;
  // static topicId: any;
}

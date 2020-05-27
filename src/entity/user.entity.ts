import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  phoneNum!: string;
}

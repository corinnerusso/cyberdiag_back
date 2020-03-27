import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Create tables

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  userId!: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  lastname!: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  firstname!: string;
}

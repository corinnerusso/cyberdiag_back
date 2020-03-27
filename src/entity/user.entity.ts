import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// on créait nos tables ici

@Entity("user")
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  lastname!: string;

  @Column({ type: "varchar", length: 50, nullable: false })
  firstname!: string;
}

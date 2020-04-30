import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Create tables

@Entity("submitest")
export class Submitest {
    @PrimaryGeneratedColumn({ type: "int" })
    submitestId!: number;

    @Column({ type: "int", nullable: true })
    surveyId!: number;

    @Column({ type: "simple-array", nullable: true })
    topic_title!: string[];

    @Column({ type: "simple-array", nullable: true })
    max_quote_topic!: string[];

    @Column({ type: "simple-array", nullable: true })
    quote_result_survey!: string[];

}

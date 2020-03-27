export class Question {
  // Class and constructor

  public questionId!: number;
  public question_title!: string;
  public comments!: string;

  constructor(input: Question) {
    Object.assign(this, input);
  }
}

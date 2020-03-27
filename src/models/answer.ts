export class Answer {
  // Class and constructor

  public answerId!: number;
  public answer_title!: string;
  public answer_quote!: number;

  constructor(input: Answer) {
    Object.assign(this, input);
  }
}

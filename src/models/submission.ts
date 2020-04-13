export class Submission {
  // Class and constructor

  public submissionId!: number;
  public userId!: number;
  public surveyId!: number;
  public answerId!: number;
  public topicId!: string;

  constructor(input: Submission) {
    Object.assign(this, input);
  }
}

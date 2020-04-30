export class Submission {
  // Class and constructor

  public submissionId!: number;
  public userId!: number;
  public surveyId!: number;
  public modelId!: number;
  public topicId!: string;
  public questionId!: string;
  public answerId!: number;

  constructor(input: Submission) {
    Object.assign(this, input);
  }
}

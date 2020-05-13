export class Submission {
  // Class and constructor

  public submissionId!: number;
  public userId!: number;
  public surveyId!: number;
  public modelId!: number;
  public topicId!: string;
  public questionId!: string;
  public answerId!: number;
  public answerQuote!: number;
  public surveyTitle!: string;
  public topicTitle!: string;
  public topicQuote!: number;

  constructor(input: Submission) {
    Object.assign(this, input);
  }
}

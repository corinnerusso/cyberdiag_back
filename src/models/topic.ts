export class Topic {
  // Class and constructor

  public topicId!: number;
  public topic_title!: string;

  constructor(input: Topic) {
    Object.assign(this, input);
  }
}

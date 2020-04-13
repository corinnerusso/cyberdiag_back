export class Topic {
  // Class and constructor

  public topicId!: number;
  public topic_title!: string;
  public topic_max_quote!: number;

  constructor(input: Topic) {
    Object.assign(this, input);
  }
}

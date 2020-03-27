export class Model {
  // Class and constructor

  public modelId!: number;
  public model_title!: string;
  public comments!: string;

  constructor(input: Model) {
    Object.assign(this, input);
  }
}

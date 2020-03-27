export class User {
  // Class and constructor

  public userId!: string;
  public lastname!: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}

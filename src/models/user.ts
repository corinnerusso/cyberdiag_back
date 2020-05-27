export class User {
  // Class and constructor

  public userId!: string;
  public lastname!: string;
  public firstname!: string;
  public email!: string;
  public password!: string;
  public cieName!: string;
  public phoneNum!: string

  constructor(input: User) {
    Object.assign(this, input);
  }
}

export class User {
  // Class and constructor

  public userId!: string;
  public lastname!: string;
  public firstname!: string;
  public email!: string;
  public password!: string;
  public cieName!: string;
  public phoneNumber!: string;
  public CGU!: boolean;
  public isAdmin!: number

  constructor(input: User) {
    Object.assign(this, input);
  }
}

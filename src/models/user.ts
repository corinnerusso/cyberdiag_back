export class User {
  // Ici la classe et son contructeur

  public id!: string;
  public lastname!: string;

  constructor(input: User) {
    Object.assign(this, input);
  }
}

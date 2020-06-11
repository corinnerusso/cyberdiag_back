export class User {
  // Class and constructor

  public id!: number;
  public lastname!: string;
  public firstname!: string;
  public email!: string;
  public password!: string;
  public cie_name!: string;
  public phone_number!: string;
  public legal_terms!: boolean;
  public isAdmin!: number;
  public user_creation_date!: Date;
  public comments!: string

  constructor(input: User) {
    Object.assign(this, input);
    this.user_creation_date = new Date(this.user_creation_date);
  }
}

export class Company {
  // Class and constructor

  public companyId!: number;
  public company_type!: string;

  constructor(input: Company) {
    Object.assign(this, input);
  }
}

export class Survey {
  // Class and constructor

  public id!: number;
  public survey_title!: string;
  public client_name!: string;
  public creation_date!: Date;

  constructor(input: Survey) {
    Object.assign(this, input);
    this.creation_date = new Date(this.creation_date);
  }
}

export class Survey {
  // Class and constructor

  public id!: number;
  public survey_title!: string;
  public client_name!: string;
  public survey_creation_date!: Date;
  public user_id!: number;
  public has_a_survey!: boolean



  constructor(input: Survey) {
    Object.assign(this, input);
    this.survey_creation_date = new Date(this.survey_creation_date);
  }
}

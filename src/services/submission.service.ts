import { getCustomRepository, createQueryBuilder, getRepository } from "typeorm";
import { SubmissionRepository } from "../repository/submission.repository";
import { Submission } from "../entity/submission.entity";


export class SubmissionService {
  private repository = getCustomRepository(SubmissionRepository);

  //service to get all the submission datas 
  async getAll() {
    return await this.repository.find();
  }

  //service to get all the submission datas with reference surveyId as the id path
  //Allows to get all the answers of a specific survey
  async getOneId(id: number) {

    const survey = getRepository(Submission)
      .createQueryBuilder("survey")
      .select("survey.topicId")
      .addSelect("survey.topicTitle")
      .addSelect("survey.topicQuote")
      .addSelect("survey.surveyTitle")
      .addSelect("SUM(survey.answerQuote)", "sum")
      .where("surveyId=:id", { id: id })
      .groupBy("survey.topicId")
      .getRawMany();
    return await survey;
  }

  //service to post all the datas in the submission entity
  //Is used when a user submit all the answers of his survey
  async post(submission: Submission) {
    return await this.repository.save(submission);
  }

}

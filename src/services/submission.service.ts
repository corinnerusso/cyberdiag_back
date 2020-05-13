import { getCustomRepository, createQueryBuilder, getRepository } from "typeorm";
import { SubmissionRepository } from "../repository/submission.repository";
import { Submission } from "../entity/submission.entity";


// Ici, on gère la logique avec typeorm notamment

export class SubmissionService {
  private repository = getCustomRepository(SubmissionRepository);


  async getAll() {
    return await this.repository.find();
  }

  //route to get all the datas with reference surveyId as the id path
  async getOneId(id: number) {

    const survey = getRepository(Submission)
      .createQueryBuilder("survey")

      .select("survey.topicId")
      .addSelect("survey.topicTitle")
      .addSelect('survey.surveyId')
      .addSelect("survey.topicQuote")
      .addSelect("survey.surveyTitle")
      .addSelect("SUM(survey.answerQuote)", "sum")
      .where("surveyId=:id", { id: id })
      .groupBy("survey.topicId")
      .getRawMany();
    return await survey;
  }


  async post(submission: Submission) {
    return await this.repository.save(submission);
  }

}

import { getCustomRepository, getRepository, Equal } from "typeorm";
import { SurveyRepository } from "../repository/survey.repository";
import { Survey } from "../entity/survey.entity";
import { CompanyRepository } from "../repository/company.repository";
import { User } from "../entity/user.entity";
import { UserRepository } from "../repository/user.repository";


export class SurveyService {
  private repository = getCustomRepository(SurveyRepository);
  companyRepository = getCustomRepository(CompanyRepository);


  //relations = all the entities that will be linked with survey entity
  relations = [
    "user",
    "company",
    "company.models",
    "company.models.topics",
    "company.models.topics.questions",
    "company.models.topics.questions.answers"];


  //service to get all the datas of the survey entity
  async getAll() {
    return await this.repository.find({
      relations: this.relations
    });
  }

  //service to get all the datas of a specific user id 
  async getById(id: number) {
    return await this.repository.findOne(id, { relations: this.relations });
  }

  //service to get datas of a user survey, when the id of the path is the foreign key userId
  //relations with user, company and models entities
  async getUserInfos(id: number) {
    const survey = getRepository(Survey)
      .createQueryBuilder("survey")
      .innerJoinAndSelect("survey.user", "user")
      .innerJoinAndSelect("survey.company", "company")
      .innerJoinAndSelect("company.models", "models")
      .where("userId=:id", { id: id })
      .getMany()
    return await survey;
  }

  //service to post a new survey
  async post(survey: Survey) {
    return await this.repository.save(survey);
  }


  //service to update a survey
  async update(survey: Survey, id: number) {
    return await this.repository.update(id, survey);
  }

  //service to delete a survey
  async deleteById(id: number) {
    return await this.repository.delete(id);
  }
}

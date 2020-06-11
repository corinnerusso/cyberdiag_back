import { getCustomRepository, getRepository, Equal } from "typeorm";
import { SurveyRepository } from "../repository/survey.repository";
import { Survey } from "../entity/survey.entity";
import { CompanyRepository } from "../repository/company.repository";
import { User } from "../entity/user.entity";
import { UserRepository } from "../repository/user.repository";

// Ici, on gère la logique avec typeorm notamment

export class SurveyService {
  private repository = getCustomRepository(SurveyRepository);
  companyRepository = getCustomRepository(CompanyRepository);

  relations = [
    "user",
    "company",
    "company.models",
    "company.models.topics",
    "company.models.topics.questions",
    "company.models.topics.questions.answers"];

  async getAll() {
    return await this.repository.find({
      relations: this.relations
    });
  }


  async getById(id: number) {
    return await this.repository.findOne(id, { relations: this.relations });
  }

  // async getOneId(id: number) {
  //   return await this.repository.findOne({ user: { id: id } }, { relations: ["user", "company", "company.models"] });
  // }
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

  async post(survey: Survey) {
    return await this.repository.save(survey);
  }

  async update(survey: Survey, id: number) {
    return await this.repository.update(id, survey);
  }

  async deleteById(id: number) {
    return await this.repository.delete(id);
  }
}

import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repository/survey.repository";
import { Survey } from "../entity/survey.entity";
import { CompanyRepository } from "../repository/company.repository";

// Ici, on gère la logique avec typeorm notamment

export class SurveyService {
  private repository = getCustomRepository(SurveyRepository);
  companyRepository = getCustomRepository(CompanyRepository);

  relations = ["company"];

  async getAll() {
    return await this.repository.find({
      relations: this.relations
    });
  }

  async getById(id: number) {
    return await this.repository.findOne(id);
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

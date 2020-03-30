import { getCustomRepository } from "typeorm";
import { SurveyRepository } from "../repository/survey.repository";
import { Survey } from "../entity/survey.entity";

// Ici, on gère la logique avec typeorm notamment

export class SurveyService {
  private repository = getCustomRepository(SurveyRepository);

  relations = ["company"];

  async getAll() {
    return await this.repository.find({
      relations: this.relations
    });
  }
}

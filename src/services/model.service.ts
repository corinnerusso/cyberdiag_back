import { getCustomRepository } from "typeorm";
import { ModelRepository } from "../repository/model.repository";



export class ModelService {
  private repository = getCustomRepository(ModelRepository);

  //relations = all the entities that will be linked with model entity
  relations = [
    "company",
    "topics",
    "topics.questions",
    "topics.questions.answers"
  ];

  //service to get all the survey models with linked entities
  async getAll() {
    return await this.repository.find({
      relations: this.relations
    });
  }


}

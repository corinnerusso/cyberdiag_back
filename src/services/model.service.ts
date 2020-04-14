import { getCustomRepository } from "typeorm";
import { ModelRepository } from "../repository/model.repository";

// Ici, on gère la logique avec typeorm notamment

export class ModelService {
  private repository = getCustomRepository(ModelRepository);

  relations = [
    "company",
    "topics",
    "topics.questions",
    "topics.questions.answers"
  ];
  async getAll() {
    return await this.repository.find({
      relations: this.relations
    });
  }


}

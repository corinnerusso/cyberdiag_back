import { getCustomRepository } from "typeorm";
import { TopicRepository } from "../repository/topic.repository";
import { Topic } from "../entity/topic.entity";

// Ici, on gère la logique avec typeorm notamment

export class TopicService {
  private repository = getCustomRepository(TopicRepository);

  relations = ["questions"];
  async getAll() {
    return await this.repository.find({ relations: this.relations });
  }
}

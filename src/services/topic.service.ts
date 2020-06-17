import { getCustomRepository } from "typeorm";
import { TopicRepository } from "../repository/topic.repository";




export class TopicService {
  private repository = getCustomRepository(TopicRepository);

  //relations = all the entities that will be linked with topic entity
  relations = ["questions"];

  //service to get all the topic datas with the linked entities
  async getAll() {
    return await this.repository.find({ relations: this.relations });
  }
}

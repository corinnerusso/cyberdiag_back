import { getCustomRepository } from "typeorm";
import { QuestionRepository } from "../repository/question.repository";



export class QuestionService {
  private repository = getCustomRepository(QuestionRepository);

  //service to get all the quetions related to topic entity
  async getAll() {
    return await this.repository.find({ relations: ["topic"] });
  }
}

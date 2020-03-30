import {
  getCustomRepository,
  createQueryBuilder,
  WhereExpression
} from "typeorm";
import { UserRepository } from "../repository/user.repository";
import { Question } from "../entity/question.entity";
import { QuestionRepository } from "../repository/question.repository";

// Ici, on gère la logique avec typeorm notamment

export class QuestionService {
  private repository = getCustomRepository(QuestionRepository);

  async getAll() {
    return await this.repository.find({ relations: ["topic"] });
  }
}

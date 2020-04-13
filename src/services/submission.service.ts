import { getCustomRepository, createQueryBuilder } from "typeorm";
import { SubmissionRepository } from "../repository/submission.repository";
import { Submission } from "../entity/submission.entity";
import { Topic } from "../entity/topic.entity";

// Ici, on gère la logique avec typeorm notamment

export class SubmissionService {
  private repository = getCustomRepository(SubmissionRepository);

  relations = ["topic"];
  async getAll() {
    const submit = createQueryBuilder("submission")
      .innerJoinAndSelect(Topic, "topic", "topic.topicId=submission.topicId")
      .getMany();
    return await submit;
  }

  async getById(id: number) {
    return await this.repository.findOne(id);
  }

  async post(submission: Submission) {
    return await this.repository.save(submission);
  }

  async deleteById(id: number) {
    return await this.repository.delete(id);
  }
}

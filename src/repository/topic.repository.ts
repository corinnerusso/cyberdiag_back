import { Topic } from "./../entity/topic.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Topic)
export class TopicRepository extends Repository<Topic> {}

import { Submission } from "./../entity/submission.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Submission)
export class SubmissionRepository extends Repository<Submission> {}

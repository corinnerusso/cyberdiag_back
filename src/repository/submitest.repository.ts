import { Submitest } from "./../entity/submitest.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Submitest)
export class SubmitestRepository extends Repository<Submitest> { }

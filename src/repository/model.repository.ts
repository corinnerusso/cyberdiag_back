import { Model } from "./../entity/model.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Model)
export class ModelRepository extends Repository<Model> {}

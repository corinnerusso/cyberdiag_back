import { Survey } from "./../entity/survey.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey> {}

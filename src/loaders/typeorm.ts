import { createConnection } from "typeorm";

// import * as ormconfig from "../ormconfig.json";
import { DATABASE } from '../config/config-db';
import { Company } from "../entity/company.entity";
import { Topic } from "../entity/topic.entity";
import { Question } from "../entity/question.entity";
import { Answer } from "../entity/answer.entity";
import { Model } from "../entity/model.entity";
import { Survey } from "../entity/survey.entity";
import { Submission } from "../entity/submission.entity";
import { User } from '../entity/user.entity';
import { Token } from '../entity/token.entity';

// Ici on met toutes les connections avec la BDD, et on oublie pas de rajouter les diverses 'entities'
// à l'intérieur des crochets pour les déclarer en quelque sorte.

export default async () => {
  await createConnection({
    type: "mysql",
    host: DATABASE.host,
    username: DATABASE.username,
    password: DATABASE.password,
    database: DATABASE.database,
    entities: [
      User,
      Token,
      Company,
      Topic,
      Question,
      Answer,
      Model,
      Survey,
      Submission
    ],
    synchronize: true
  });
};

import { createConnection } from "typeorm";
import { User } from "../entity/user.entity";
import * as ormconfig from "../ormconfig.json";
import { Company } from "../entity/company.entity";
import { Topic } from "../entity/topic.entity";
import { Question } from "../entity/question.entity";
import { Answer } from "../entity/answer.entity";
import { Model } from "../entity/model.entity";

// Ici on met toutes les connections avec la BDD, et on oublie pas de rajouter les diverses 'entities'
// à l'intérieur des crochets pour les déclarer en quelque sorte.

export default async () => {
  await createConnection({
    type: "mysql",
    host: ormconfig.host,
    username: ormconfig.username,
    password: ormconfig.password,
    database: ormconfig.database,
    entities: [User, Company, Topic, Question, Answer, Model],
    synchronize: true
  });
};

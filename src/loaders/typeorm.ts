import { createConnection } from "typeorm";

//Here we add all the entities connected to the database

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
    //all the changes will be realised when they are saved
  });
};

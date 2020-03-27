import { createConnection } from "typeorm";
import { User } from "../entity/user.entity";
import * as ormconfig from "../ormconfig.json";

// Ici on met toutes les connections avec la BDD, et on oublie pas de rajouter les diverses 'entities'
// à l'intérieur des crochets pour les déclarer en quelque sorte.

export default async () => {
  await createConnection({
    type: "mysql",
    host: ormconfig.host,
    username: ormconfig.username,
    password: ormconfig.password,
    database: ormconfig.database,
    entities: [User],
    synchronize: true
  });
};

import "reflect-metadata";

import express from "express";
import loaders from "./loaders";

import { AuthController } from './controller/auth.controller';


import { UserController } from "./controller/user.controller";
import { ModelController } from "./controller/model.controller";
import { TopicController } from "./controller/topic.controller";
import { QuestionController } from "./controller/question.controller";
import { SurveyController } from "./controller/survey.controller";
import { SubmissionController } from "./controller/submission.controller";
async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différents loaders
  await loaders(app);

  // Ajout des différentes routes de l'application
  UserController(app);
  ModelController(app);
  TopicController(app);
  QuestionController(app);
  SurveyController(app);
  SubmissionController(app);
  AuthController(app);

  // Démarrage du serveur (port 3005, on peut le changer) une fois que tout est correctement initialisé
  app.listen(3005, () => console.log("Express server is running"));
}

startServer();

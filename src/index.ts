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
  // Retrieve initial app
  const app = express();

  // Download loaders
  await loaders(app);

  // Add the controllers (routes)
  UserController(app);
  ModelController(app);
  TopicController(app);
  QuestionController(app);
  SurveyController(app);
  SubmissionController(app);
  AuthController(app);

  // Start server
  app.listen(3005, () => console.log("Express server is running"));
}

startServer();

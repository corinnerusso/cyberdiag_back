import express, { Router, Request, Response, Application } from "express";
import { TopicService } from "../services/topic.service";

/**

 * @param app nom de l'application express
 */

// On ajoute ici toutes les routes de l'app

export const TopicController = (app: Application) => {
  const topicRouter: Router = express.Router();
  const topicService = new TopicService();

  topicRouter.get("/", async (req: Request, res: Response) => {
    res.send(await topicService.getAll());
  });

  app.use("/topics", topicRouter);
};

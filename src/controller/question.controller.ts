import express, { Router, Request, Response, Application } from "express";
import { QuestionService } from "../services/question.service";

/**

 * @param app nom de l'application express
 */

// On ajoute ici toutes les routes de l'app

export const QuestionController = (app: Application) => {
  const questionRouter: Router = express.Router();
  const questionService = new QuestionService();

  questionRouter.get("/", async (req: Request, res: Response) => {
    res.send(await questionService.getAll());
  });

  app.use("/questions", questionRouter);
};

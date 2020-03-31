import express, { Router, Request, Response, Application } from "express";
import { SurveyService } from "../services/survey.service";

/**

 * @param app nom de l'application express
 */

// On ajoute ici toutes les routes de l'app

export const SurveyController = (app: Application) => {
  const surveyRouter: Router = express.Router();
  const surveyService = new SurveyService();

  surveyRouter.get("/", async (req: Request, res: Response) => {
    res.send(await surveyService.getAll());
  });

  surveyRouter.post("/", async (req: Request, res: Response) => {
    res.send(await surveyService.post(req.body));
  });

  app.use("/surveys", surveyRouter);
};

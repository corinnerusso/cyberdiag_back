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

  surveyRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await surveyService.getById(id));
  });

  surveyRouter.get("/user/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await surveyService.getUserInfos(id));
  });

  surveyRouter.post("/", async (req: Request, res: Response) => {
    res.send(await surveyService.post(req.body));
  });

  surveyRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const survey = req.body;

    res.send(await surveyService.update(survey, id));
  });

  surveyRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    res.send(await surveyService.deleteById(id));
  });
  app.use("/surveys", surveyRouter);
};

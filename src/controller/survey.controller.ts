import express, { Router, Request, Response, Application } from "express";
import { SurveyService } from "../services/survey.service";


//The controller is the part of the application that is in charge of receiving http requests.
// Refers to submission.service.ts

export const SurveyController = (app: Application) => {
  const surveyRouter: Router = express.Router();
  const surveyService = new SurveyService();


  //get all the survey datas
  //relation with user, company, model, topic, question, answer entities
  surveyRouter.get("/", async (req: Request, res: Response) => {
    res.send(await surveyService.getAll());
  });

  //get all the surveys created 
  //relation with user, company, model, topic, question, answer entities
  //is used in the component MySurvey
  surveyRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await surveyService.getById(id));
  });


  //route to get all the datas of a user survey (id=userId)
  //relation with user, company, model entities
  //is used in the component HomePage
  surveyRouter.get("/user/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await surveyService.getUserInfos(id));
  });


  //*********METHOD POST *********** */
  //route to post a new survey in survey table 
  //is used in the component HomePage when a user creates a new survey
  surveyRouter.post("/", async (req: Request, res: Response) => {
    res.send(await surveyService.post(req.body));
  });

  //*********METHOD PUT *********** */
  //route to update a user survey
  //is used i the component HomePage when a user wants to update datas
  surveyRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const survey = req.body;
    res.send(await surveyService.update(survey, id));
  });

  //*********METHOD DELETE *********** */
  //route to delete a survey in cascade  with submission table (refers to survey.entity.ts)
  //is used in the component HomePage when a user wants to delete a survey
  surveyRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    res.send(await surveyService.deleteById(id));
  });

  //path
  app.use("/surveys", surveyRouter);
  //http://localhost:3005/surveys
};

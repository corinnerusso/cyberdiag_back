import express, { Router, Request, Response, Application } from "express";
import { SubmissionService } from "../services/submission.service";


//The controller is the part of the application that is in charge of receiving http requests.
// Refers to submission.service.ts

export const SubmissionController = (app: Application) => {
  const submissionRouter: Router = express.Router();
  const submissionService = new SubmissionService();


  //get all the datas from submission entity
  submissionRouter.get("/", async (req: Request, res: Response) => {
    res.send(await submissionService.getAll());
  });


  //route to get all the submission datas references to a surveyId


  submissionRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await submissionService.getOneId(id));
  });


  // *******METHOD POST********// 
  //route to post all the answers of a survey in the submission table 
  submissionRouter.post("/", async (req: Request, res: Response) => {
    res.send(await submissionService.post(req.body));
  });


  //path
  app.use("/submit", submissionRouter);
  //http://localhost:3005/submit
};

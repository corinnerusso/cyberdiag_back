import express, { Router, Request, Response, Application } from "express";
import { QuestionService } from "../services/question.service";


//The controller is the part of the application that is in charge of receiving http requests.
// Refers to question.service.ts

export const QuestionController = (app: Application) => {
  const questionRouter: Router = express.Router();
  const questionService = new QuestionService();


  //route to get all the question datas 
  //relation with topic entity 
  questionRouter.get("/", async (req: Request, res: Response) => {
    res.send(await questionService.getAll());
  });


  //path
  app.use("/questions", questionRouter);
  //http://localhost:3005/questions
};

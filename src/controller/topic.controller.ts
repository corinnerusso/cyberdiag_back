import express, { Router, Request, Response, Application } from "express";
import { TopicService } from "../services/topic.service";


//The controller is the part of the application that is in charge of receiving http requests.
//Refers to survey.service.ts

export const TopicController = (app: Application) => {
  const topicRouter: Router = express.Router();
  const topicService = new TopicService();


  //route to get all the datas of the topic table (refers to topic.entity.ts)
  topicRouter.get("/", async (req: Request, res: Response) => {
    res.send(await topicService.getAll());
  });

  //path
  app.use("/topics", topicRouter);
};

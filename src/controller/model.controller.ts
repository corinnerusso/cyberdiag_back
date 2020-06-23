import express, { Router, Request, Response, Application } from "express";
import { ModelService } from "../services/model.service";



//The controller is the part of the application that is in charge of receiving http requests.
// Refers to model.service.ts

export const ModelController = (app: Application) => {
  const modelRouter: Router = express.Router();
  const modelService = new ModelService();

  //get all the model datas
  //relation with topic, question, answer entities  
  modelRouter.get("/", async (req: Request, res: Response) => {
    res.send(await modelService.getAll());
  });


  //path
  app.use("/models", modelRouter);
  //http://localhost:3005/models
};

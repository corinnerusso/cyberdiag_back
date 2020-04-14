import express, { Router, Request, Response, Application } from "express";
import { ModelService } from "../services/model.service";

/**

 * @param app nom de l'application express
 */

// On ajoute ici toutes les routes de l'app

export const ModelController = (app: Application) => {
  const modelRouter: Router = express.Router();
  const modelService = new ModelService();

  modelRouter.get("/", async (req: Request, res: Response) => {
    res.send(await modelService.getAll());
  });



  app.use("/models", modelRouter);
};

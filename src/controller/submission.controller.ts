import express, { Router, Request, Response, Application } from "express";
import { SubmissionService } from "../services/submission.service";

/**

 * @param app nom de l'application express
 */

// On ajoute ici toutes les routes de l'app

export const SubmissionController = (app: Application) => {
  const submissionRouter: Router = express.Router();
  const submissionService = new SubmissionService();

  submissionRouter.get("/", async (req: Request, res: Response) => {
    res.send(await submissionService.getAll());
  });

  submissionRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await submissionService.getOneId(id));
  });
  submissionRouter.post("/", async (req: Request, res: Response) => {
    res.send(await submissionService.post(req.body));
  });



  app.use("/submit", submissionRouter);
};

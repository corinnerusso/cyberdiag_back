import express, { Router, Request, Response, Application } from "express";
import { SubmitestService } from "../services/submitest.service";

/**

 * @param app nom de l'application express
 */

// On ajoute ici toutes les routes de l'app

export const SubmitestController = (app: Application) => {
    const submitestRouter: Router = express.Router();
    const submitestService = new SubmitestService();

    submitestRouter.get("/", async (req: Request, res: Response) => {
        res.send(await submitestService.getAll());
    });

    submitestRouter.get("/:id", async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        res.send(await submitestService.getById(id));
    });




    app.use("/submitest", submitestRouter);
};

import { commonController } from './../core/common_functions.controller';
import { Application, Router, Request, Response } from 'express';
import { UserService } from "../services/user.service";

/**

 * @param app nom de l'application express
 */

// On ajoute ici toutes les routes de l'app

export const UserController = (app: Application) => {
  // const userRouter: Router = express.Router();
  const userService = new UserService();
  let userRouter = Router();
  userRouter = commonController(userService, userRouter);

  userRouter.get("/", async (req: Request, res: Response) => {
    res.send(await userService.getAll());
  });

  userRouter.get("/dashboard", async (req: Request, res: Response) => {
    res.send(await userService.getDashboard());
  });

  userRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await userService.getById(id));
  });

  userRouter.post("/", async (req: Request, res: Response) => {
    res.send(await userService.post(req.body));
  });

  // userRouter.put("/:id", async (req: Request, res: Response) => {
  //   const id = parseInt(req.params.id, 10);
  //   const user = req.body;

  //   res.send(await userService.update(user, id));
  // });

  userRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    res.send(await userService.deleteById(id));
  });

  app.use("/users", userRouter);
};

import { commonController } from './../core/common_functions.controller';
import { Application, Router, Request, Response } from 'express';
import { UserService } from "../services/user.service";

//The controller is the part of the application that is in charge of receiving http requests.
//Refers to user.service.ts

export const UserController = (app: Application) => {

  const userService = new UserService();
  let userRouter = Router();
  userRouter = commonController(userService, userRouter);

  //route to get user datas from user table (refers to user.entity.ts)
  //is used in the component Dashboard
  userRouter.get("/", async (req: Request, res: Response) => {
    res.send(await userService.getAll());
  });


  //route to get all the datas from user table for a specific user 
  //is used in the component Account
  userRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await userService.getById(id));
  });

  //route to post a new user
  userRouter.post("/", async (req: Request, res: Response) => {
    res.send(await userService.post(req.body));
  });

  app.use("/users", userRouter);
  //http://localhost:3005/users
};

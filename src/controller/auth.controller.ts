import express, { Application, Request, Response, Router } from 'express';
import { AuthService } from './../services/auth.service';

const jwt = require('jsonwebtoken');
import * as config from '../config/jwt-secret';

//The controller is the part of the application that is in charge of receiving http requests.

export const AuthController = (app: Application) => {

    const authRouter: Router = express.Router();
    const authService = new AuthService();

    authRouter.post('/register', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signup(user);

            const token = jwt.sign({ id: user.id }, config.JWT_SECRET, {
                expiresIn: 86400, // expires in 24 hours
            });
            res.status(200).send({ auth: true, token, user });
        } catch (error) {
            if (error.message === 'ALREADY_EXIST') {
                res.send({ Erreur: 'Informations déjà utilisées' });
                res.status(409).send('Informations déjà utilisées');
            } else {
                res.status(409).send('Erreur lors de l\'inscription');
            }
        }
    });

    authRouter.post('/register-admin', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signup(user);
            /* res.sendStatus(204); */
            const token = jwt.sign({ id: user.id }, config.JWT_SECRET, {
                expiresIn: 86400, // expires in 24 hours
            });
            res.status(200).send({ auth: true, token, user });
        } catch (error) {
            if (error.message === 'ALREADY_EXIST') {
                res.send({ Erreur: 'Datas already used' });
                res.status(409).send('Datas already used');
            } else {
                res.status(409).send('Erreur when create a new account');
            }
        }
    });

    authRouter.get('/confirmation/:token', async (req: Request, res: Response) => {
        const token = req.params.token;
        try {
            await authService.isConfirmed(token);
            //If the user has activated the link t=in the confirmation mail, he will be redirected 
            //to the login page

        } catch (error) {
            res.status(400).send('Not available link !');
        }
    });

    authRouter.post('/login', async (req: Request, res: Response) => {
        const email = req.body.email;
        const password = req.body.password;
        try {
            const user = await authService.signIn(email, password);
            const token = jwt.sign({ id: user.user.id }, config.JWT_SECRET, {
                expiresIn: 86400, // expires in 24 hours
            });


            res.status(200).send({ auth: true, user, token });
        } catch (error) {
            if (error.message === 'NOT ACTIVE') {
                res.status(409).send('This account is not activated');
            } else {
                res.status(400).send('Wrong email or password');
            }
        }
    });

    app.use('/', authRouter);
};

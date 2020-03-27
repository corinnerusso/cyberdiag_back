import "reflect-metadata";

import express from "express";
import loaders from "./loaders";

import { UserController } from "./controller/user.controller";
import { ModelController } from "./controller/model.controller";
async function startServer() {
  // Récupération de l'application initiale
  const app = express();

  // Chargement des différents loaders
  await loaders(app);

  // Ajout des différentes routes de l'application
  UserController(app);
  ModelController(app);

  // Démarrage du serveur (port 3000, on peut le changer) une fois que tout est correctement initialisé
  app.listen(3005, () => console.log("Express server is running"));
}

startServer();

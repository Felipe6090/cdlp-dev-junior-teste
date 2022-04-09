import { Router } from "express";

import PassAllItemsHandler from "./controllers/GetAllProductsController";

import TakeOneProductController from "./controllers/TakeOneProductController";

import LoginController from "./controllers/LoginController";

import RefreshTokenController from "./controllers/RefreshTokenController";

import GetUserDataController from "./controllers/GetUserDataController";

import GetAllUsersDataController from "./controllers/GetAllUsersDataController";

const passAllItemsHandler = new PassAllItemsHandler();

const takeOneProductController = new TakeOneProductController();

const loginController = new LoginController();

const refreshTokenController = new RefreshTokenController();

const getUserDataController = new GetUserDataController();

const getAllUsersDataController = new GetAllUsersDataController();

//

const routes = Router();

routes.get("/getAll", passAllItemsHandler.defaultFormart);

routes.get("/secundaryGetAll", passAllItemsHandler.alternativeFormat);

routes.get("/takeProduct/:product", takeOneProductController.handle);

routes.post("/login", loginController.login);

routes.post("/refreshToken", refreshTokenController.handle);

routes.post("/getUserData", getUserDataController.handle);

routes.get("/getAllUsers", getAllUsersDataController.handle);

export { routes };

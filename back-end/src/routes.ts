import { Router } from "express";

import LoginController from "./controllers/LoginController";

import RefreshTokenController from "./controllers/RefreshTokenController";

import GetUserDataController from "./controllers/GetUserDataController";

import CreatePostController from "./controllers/CreatePostController";

import UpdatePostController from "./controllers/UpdatePostController";

import DeletePostController from "./controllers/DeletePostController";

//

const loginController = new LoginController();

const refreshTokenController = new RefreshTokenController();

const getUserDataController = new GetUserDataController();

const createPostController = new CreatePostController();

const updatePostController = new UpdatePostController();

const deletePostController = new DeletePostController();

//

const routes = Router();

routes.post("/login", loginController.login);

routes.post("/refreshToken", refreshTokenController.handle);

routes.post("/getUserData", getUserDataController.handle);

routes.post("/createPost", createPostController.handle);

routes.post("/updatePost", updatePostController.handle);

routes.post("/deletePost", deletePostController.handle);

export { routes };

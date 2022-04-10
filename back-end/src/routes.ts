import { Router } from "express";

import LoginController from "./controllers/LoginController";

import RefreshTokenController from "./controllers/RefreshTokenController";

import GetUserDataController from "./controllers/GetUserDataController";

import CreatePostController from "./controllers/CreatePostController";

import UpdatePostController from "./controllers/UpdatePostController";

import DeletePostController from "./controllers/DeletePostController";

import GetPostsController from "./controllers/GetPostsController";

//

const loginController = new LoginController();

const getUserDataController = new GetUserDataController();

const refreshTokenController = new RefreshTokenController();

const createPostController = new CreatePostController();

const updatePostController = new UpdatePostController();

const deletePostController = new DeletePostController();

const getPostsController = new GetPostsController();

//

const routes = Router();

routes.post("/login", loginController.login);

routes.post("/refreshToken", refreshTokenController.handle);

routes.post("/getUserData", getUserDataController.handle);

routes.post("/createPost", createPostController.handle);

routes.patch("/updatePost", updatePostController.handle);

routes.delete("/deletePost", deletePostController.handle);

routes.get("/getPosts", getPostsController.handle);

export { routes };

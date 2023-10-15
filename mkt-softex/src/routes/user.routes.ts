import { Router } from "express";
import userControllerPost from "../controllers/user/user.controller.post";

export const userRoutes = (): Router => {
    const router = Router();

    router.post('/users', userControllerPost.createUser)

    return router;
}
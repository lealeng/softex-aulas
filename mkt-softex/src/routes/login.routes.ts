import { Router } from "express";
import loginController from "../controllers/login/login.controller";
import profileController from "../controllers/login/profile.controller";
import { authMiddlewares } from "../middlewares/auth.middlewares";


export const loginRoutes = (): Router => {
    const router = Router();

    router.post('/login', loginController.login)
    router.get('/profile', authMiddlewares, profileController.getProfile)

    return router;
}
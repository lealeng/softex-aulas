import { Router } from "express";
import loginController from "../controllers/login/login.controller";
import profileController from "../controllers/login/profile.controller";


export const loginRoutes = (): Router => {
    const router = Router();

    router.post('/login', loginController.login)
    router.get('/profile', profileController.getProfile)

    return router;
}
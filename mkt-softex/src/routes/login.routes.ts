import { Router } from "express";
import loginController from "../controllers/login/login.controller";


export const loginRoutes = (): Router => {
    const router = Router();

    router.post('/login', loginController.login)

    return router;
}
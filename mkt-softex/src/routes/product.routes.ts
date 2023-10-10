import { Router } from "express";
import productControllerGet from "../controllers/product.controller.get";

export const producRoutes = () : Router => {
    const router = Router();

    router.get('/products', productControllerGet.listProducts)
    router.get('/products/:id', productControllerGet.listProductId)

    return router;
}
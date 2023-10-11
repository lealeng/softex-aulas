import { Router } from "express";
import productControllerGet from "../../controllers/product/product.controller.get";
import productControllerPost from "../../controllers/product/product.controller.post";
import productControllerPut from "../../controllers/product/product.controller.put";

export const producRoutes = (): Router => {
    const router = Router();

    router.get('/products', productControllerGet.listProducts)
    router.get('/products/:id', productControllerGet.listProductId)
    router.post('/products', productControllerPost.createProduct)
    router.put('/produts', productControllerPut.updateProduct)


    return router;
}
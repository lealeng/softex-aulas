import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

class ProductControllerPut {
    async updateProduct(req: Request, res: Response) {
        try {
            const paramsSchema = z.object({
                id: z.string(),
            })

            const { id } = paramsSchema.parse(req.params)
            const idProduct = parseInt(id, 10)

            const bodySchema = z.object({
                codBars: z.string(),
                name: z.string(),
                price: z.number(),
                activated: z.boolean().default(true),
                categoryId: z.number(),
                subCategoryId: z.number(),
                userId: z.number(),
            })
            const {
                codBars,
                name,
                price,
                activated,
                categoryId,
                subCategoryId,
                userId,
            } = bodySchema.parse(req.body)

            const product = await prisma.product.update({
                where: {
                    id: idProduct,
                },
                data: {
                    codBars,
                    name,
                    price,
                    activated,
                    categoryId,
                    subCategoryId,
                    userId,
                }
            })

            if (!product) {
                return res.status(404).json({ message: 'Produto não encontrado' })
            }

            return res.status(201).json(product)
        } catch (error) {
            console.log(error, 'erro ao atualizar o produto', error)
            return res.status(500).json({ message: 'Erro ao atualizar o produto' })
        }
    }
}
export default new ProductControllerPut();
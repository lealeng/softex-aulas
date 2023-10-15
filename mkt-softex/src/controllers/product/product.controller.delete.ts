import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

class ProductControllerDelete {
    async deleteProduct (req: Request, res: Response) {
        try {
            const paramsSchema = z.object({
                id: z.string(),
            })
            const { id } = paramsSchema.parse(req.params)
            const product = await prisma.product.delete({
                where: {
                    id: parseInt(id)
                }
            })
            if (product) {
                return res.status(404).json({ message: 'Produto não encontrado'})
            }
        } catch (error) {
            console.log(error, 'erro ao deletar produto');
            return res.status(500).json({ message: 'Erro ao deletar o produto'})
        }
    }
}

export default new ProductControllerDelete();
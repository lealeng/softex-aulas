import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { z } from "zod";

class ProductControllerGet {
  async listProducts(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany({
        orderBy: {
          id: "asc",
        },
      });

      return res.status(200).json(products);
    } catch (error) {
      console.log(error, "erro ao buscar os produtos");
      return res
        .status(500)
        .json({ message: "Erro ao consultar os produtos, tente novamente" });
    }
  }

  async listProductId(req: Request, res: Response) {
    try {
      const paramsSchema = z.object({
        id: z.string(),
      });
      const { id } = paramsSchema.parse(req.params);
      const idProduct = parseInt(id, 10);
      const product = await prisma.product.findUniqueOrThrow({
        where: {
          id: idProduct,
        },
      });

      if (!product) {
        return res.status(404).json({ message: "Produto não encontrado" });
      }

      return res.status(200).json(product);
    } catch (error) {
      console.log(error, "erro ao buscar produto");
      return res
        .status(500)
        .json({ message: "Erro ao buscar produto, tente novamente" });
    }
  }
}

export default new ProductControllerGet();

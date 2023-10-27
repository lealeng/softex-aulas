import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

class ProductControllerPost {
  async createProduct(req: Request, res: Response) {
    try {
      const bodySchema = z.object({
        codBars: z.string(),
        name: z.string(),
        price: z.number(),
        activated: z.boolean().default(true),
        categoryId: z.number(),
        subCategoryId: z.number(),
        userId: z.number(),
      });
      const {
        codBars,
        name,
        price,
        activated,
        categoryId,
        subCategoryId,
        userId,
      } = bodySchema.parse(req.body);

      const codBarsExists = await prisma.product.findUnique({
        where: { codBars },
      });

      if (codBarsExists) {
        return res.status(400).json("O código de barras já existe.");
      }

      const products = await prisma.product.create({
        data: {
          codBars,
          name,
          price,
          activated,
          categoryId,
          subCategoryId,
          userId,
        },
      });

      console.log(products);

      return res.status(201).json(products);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao criar o produto, tente novamente" });
    }
  }
}

export default new ProductControllerPost();

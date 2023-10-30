import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { z, ZodError } from "zod";

class ProductControllerPost {
  async createProduct(req: Request, res: Response) {
    try {
      const bodySchema = z.object({
        codBars: z.string(),
        name: z.string(),
        price: z.number(),
        categoryId: z.number(),
        subCategoryId: z.number(),
        userId: z.number().int(),
      });

      // Verificar a validade dos dados
      const validatedData = bodySchema.parse(req.body);

      const { codBars, name, price, categoryId, subCategoryId, userId } =
        validatedData;

      const category = await prisma.category.findUnique({
        where: { id: categoryId },
      });
      const subCategory = await prisma.subCategory.findUnique({
        where: { id: subCategoryId },
      });
      const existingProduct = await prisma.product.findUnique({
        where: { codBars },
      });

      if (!category) {
        return res
          .status(400)
          .json({ message: "A categoria informada não existe." });
      }

      if (!subCategory) {
        return res
          .status(400)
          .json({ message: "A subcategoria informada não existe." });
      }

      if (existingProduct) {
        return res.status(400).json({
          message: "A mercadoria com o código de barras informado já existe.",
        });
      }

      const newProduct = await prisma.product.create({
        data: {
          codBars,
          name,
          price,
          categoryId,
          subCategoryId,
          userId,
        },
      });

      return res.status(201).json(newProduct);
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json({ message: "Erro de validação", error: error.errors });
      }

      return res
        .status(500)
        .json({ message: "Erro ao criar o produto, tente novamente." });
    }
  }
}

export default new ProductControllerPost();

import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors/AppError";

//Criar produto
export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, bar_code, price } = request.body;

    // Verificar se o produto já existe
    const productAlreadyExists = await prismaClient.product.findFirst({
      where: {
        name,
      },
    });

    if (productAlreadyExists) {
      throw new AppError("Product already exists");
    } else {
      console.log("Deseja alterar o produto?");
    }

    const product = await prismaClient.product.create({
      data: {
        name,
        bar_code,
        price,
      },
    });

    return response.json(product);
  }
}
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { AppError } from "../../errors/AppError";

//Criar categoria 
export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    // Verificar se o categoria já existe
    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    const category = await prismaClient.category.create({
      data: {
        name,
      },
    });

    return response.json(category);
  }
}
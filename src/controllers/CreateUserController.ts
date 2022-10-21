import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { AppError } from "../errors/AppError";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    // Verificar se o usuário já existe
    const userAlreadyExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    // Criação de usuário
    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return response.json(user);
  }
}
import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

//Relacionar usuarios existentes e permição existe
export class CreateUserPermitionsController {
  async handle(request: Request, response: Response) {
    const { id_permition, id_user } = request.body;

    const userPermitions = await prismaClient.userPermitions.create({
      data: {
        id_user,
        id_permition,
      },
    });

    return response.json(userPermitions);
  }
}
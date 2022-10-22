import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

//Relacionar usuarios existentes e regras existe
export class CreateUsersRulesController {
  async handle(request: Request, response: Response) {
    const { id_user, id_rules } = request.body;

    const usersRules = await prismaClient.usersRules.create({
      data: {
        id_rules,
        id_user,
      },
    });

    return response.json(usersRules);
  }
}
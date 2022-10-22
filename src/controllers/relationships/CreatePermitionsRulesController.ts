import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

//Relacionar permição existente e regras existe
export class CreatePermitionsRulesController {
  async handle(request: Request, response: Response) {
    const { id_permition, id_rules } = request.body;

    const permitionsRules = await prismaClient.permitionsRules.create({
      data: {
        id_permition,
        id_rules,
      },
    });

    return response.json(permitionsRules);
  }
}
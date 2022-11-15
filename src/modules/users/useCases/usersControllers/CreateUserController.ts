import { Request, Response } from "express";
import { prismaClient } from "../../../../database/prismaClient";
import { UserRepository } from "../../repositories/implametations/UserRepository";
import { CreateUserUseCase } from "../CreateUserUseCase";

const usersRepository = new UserRepository()

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUserUseCase = new CreateUserUseCase(usersRepository);

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(user);
  }
}
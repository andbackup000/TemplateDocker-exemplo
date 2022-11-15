import { User } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { ICreateUsersDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository{

    async create({ name, email, password }: ICreateUsersDTO): Promise<User> {
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password
            }
        })
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await prismaClient.user.findUnique({
            where: {
            email,
            },
        });
    
        return user as unknown as User;
    }
}

export { UserRepository }
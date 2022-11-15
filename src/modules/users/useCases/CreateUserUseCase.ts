import { AppError } from "../../../errors/AppError";
import { ICreateUsersDTO } from "../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute({ name, email, password }: ICreateUsersDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if ( userAlreadyExists ) {
            throw new AppError("User already exists!");
        }

        const user = await this.usersRepository.create({
            name,
            email,
            password
        });

        return user;

    }


}

export { CreateUserUseCase }
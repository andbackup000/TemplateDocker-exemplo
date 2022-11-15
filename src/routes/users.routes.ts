import { Router } from "express"
import { CreateUserController } from "../modules/users/useCases/usersControllers/CreateUserController"


const userRoutes = Router()

const createUser = new CreateUserController();

userRoutes.post("/", createUser.handle);



export { userRoutes };
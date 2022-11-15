import { Router } from "express"
import { userRoutes } from "./users.routes";

const routes = Router();

routes.post("/users", userRoutes);

export { routes }

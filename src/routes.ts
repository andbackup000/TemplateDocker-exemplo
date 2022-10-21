import express, { Router } from "express"
import { CreateProductController } from "./controllers/CreateProductController"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateCategoryController } from "./controllers/CreateCategoryController"
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController"
import { CreateProductCategoryExistController } from "./controllers/CreateProductCategoryExistController"
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";

const app = express();
const router = Router()

const createProduct = new CreateProductController();
const createUser = new CreateUserController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductCategoryExistController();
const findCategory = new FindCategoryController();
const findProduct = new FindProductController();


router.post("/product", createProduct.handle);
router.post("/users", createUser.handle);
router.post("/category", createCategory.handle);
router.post("/categoryProduct", createProductCategory.handle);
router.post("/productWithCategory", createProductCategoryExist.handle);
router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);


export { router };
import express, { Router } from "express"
import { CreateProductController } from "./controllers/singles/CreateProductController"
import { CreateUserController } from "./controllers/singles/CreateUserController"
import { CreateCategoryController } from "./controllers/singles/CreateCategoryController"
import { CreateProductCategoryController } from "./controllers/relationships/CreateProductCategoryController"
import { CreateProductCategoryExistController } from "./controllers/CreateProductCategoryExistController"
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";
import { CreatePermitionsRulesController } from "./controllers/relationships/CreatePermitionsRulesController"
import { CreateUserPermitionsController } from "./controllers/relationships/CreateUserPermitionsController"
import { CreateUsersRulesController } from "./controllers/relationships/CreateUserRulesController"

const app = express();
const router = Router()


const createProduct = new CreateProductController();
const createUser = new CreateUserController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createUserRules = new CreateUsersRulesController();
const createUserPermitions = new CreateUserPermitionsController();
const createPermitionsRules = new CreatePermitionsRulesController();
const createProductCategoryExist = new CreateProductCategoryExistController();
const findCategory = new FindCategoryController();
const findProduct = new FindProductController();


router.post("/product", createProduct.handle);
router.post("/users", createUser.handle);
router.post("/category", createCategory.handle);

router.post("/categoryProduct", createProductCategory.handle);
router.post("/userRules", createUserRules.handle);
router.post("/userPermitions", createUserPermitions.handle);
router.post("/permitionsRules", createPermitionsRules.handle);

router.post("/productWithCategory", createProductCategoryExist.handle);
router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);


export { router };
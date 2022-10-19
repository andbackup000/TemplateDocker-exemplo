import express from "express";
import { router } from "./routes";

const PORT = 4003;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());
app.use(router);



app.listen(PORT, HOST,  () => console.log("Server is running on PORT 4003"));
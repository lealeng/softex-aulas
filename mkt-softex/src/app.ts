import express, { Router } from "express";
import { producRoutes } from "./routes/product.routes";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express();

app.use(express.json());


// Rotas usuários
app.use(producRoutes())
app.use(userRoutes())
app.use(loginRoutes())


// Rotas produtos



export default app;


import express, { Router } from "express";
import { producRoutes } from "./routes/product/product.routes";

const app = express();

app.use(express.json());


// Rotas usuários
app.use(producRoutes())


// Rotas produtos



export default app;


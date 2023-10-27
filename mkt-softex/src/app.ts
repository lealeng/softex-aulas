import express, { Router } from "express";
import { userRoutes } from "./routes/user.routes";
import { loginRoutes } from "./routes/login.routes";
import { productRoutes } from "./routes/product.routes";

const app = express();

app.use(express.json());

app.use(userRoutes());
app.use(loginRoutes());
app.use(productRoutes());

export default app;

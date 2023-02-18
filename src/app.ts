import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./error/error";
import userRouters from "./routers/users.routers";
const app: Application = express();
app.use(express.json());
app.use("/users", userRouters);

app.use(handlreErrors);
export default app;

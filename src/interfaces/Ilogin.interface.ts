import { z } from "zod";
import { createdLoginSchema } from "../schemas/login.schema";

type IloginRequest = z.infer<typeof createdLoginSchema>;

export { IloginRequest };

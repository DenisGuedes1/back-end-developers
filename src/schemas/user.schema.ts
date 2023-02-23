// import { hashSync } from "bcryptjs";
import { hashSync } from "bcryptjs";
import { z } from "zod";

const creatUserSchema = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().transform((pass) => {
    return hashSync(pass, 10);
  }),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
});
const userSchemaEdit = z.object({
  name: z.string().min(3).max(20).optional(),
  email: z.string().email().optional(),
  password: z
    .string()
    .transform((pass) => hashSync(pass))
    .optional(),
});

export { creatUserSchema, userSchemaEdit };

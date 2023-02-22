import { z } from "zod";
const createdLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { createdLoginSchema };

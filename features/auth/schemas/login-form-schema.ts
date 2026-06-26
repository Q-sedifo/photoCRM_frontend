import * as z from "zod"

const loginFormSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required"),
})

export default loginFormSchema
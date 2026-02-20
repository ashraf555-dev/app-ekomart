/**
 * Zod schema for register form: userName, email, password.
 * Password: min 8 chars, 1 uppercase, 3 digits.
 */
import { z } from "zod";

const registerSchema = z.object({
    userName: z.string().min(1, { message: "User name is required" }),
    email: z.string().min(1, { message: "Email is required" })
        .email({ message: "Email is not valid" }),
    password: z.string().min(1, { message: "Password is required" })
        .regex(/[A-Z]/, { message: "Password must have one capital character" })
        .regex(/[0-9]{3}/, { message: "Enter 3 numbers at least" }) 
        .min(8, { message: "Password must be 8 characters or more" }),
});

export default registerSchema;
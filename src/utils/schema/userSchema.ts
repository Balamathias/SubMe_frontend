import { z } from "zod";

export const UserSchema = z.object({
    username: z.string(),
    email: z.string().email().readonly(),
    phone: z.string().min(11).max(11),
    first_name: z.string(),
    last_name: z.string(),
    pin: z.string().min(4).max(4),
    postal_code: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
    state: z.string().nullable().optional(),
    street: z.string().nullable().optional(),
})
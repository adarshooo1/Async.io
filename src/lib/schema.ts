import { z } from "zod";

export const EditProfileSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

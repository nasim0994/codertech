import { z } from 'zod';

export const messageValidation = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number cannot exceed 15 digits'),
  email: z.string().email('Invalid email format'),
  message: z.string().min(1, 'Message is required'),
});

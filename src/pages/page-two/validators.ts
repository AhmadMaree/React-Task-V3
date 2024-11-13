import { z } from "zod";

export const validationSchemaPatient = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    gender: z.string().min(1, { message: 'Gender is required' }),
    birthDate: z
        .string()
        .min(1, { message: 'Date of birth is required' })
        .transform((str) => {
            const date = new Date(str);
            return isNaN(date.getTime()) ? null : date;
        })
        .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
            message: 'Invalid date',
        }),
    disorders: z.array(z.string()).optional(),
    workspaceTemplate: z.string().min(1, 'Workspace template is required'),
});
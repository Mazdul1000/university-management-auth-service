import { z } from 'zod';

const academicDepartmentCreateZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
    academicFaculty: z.string({
      required_error: 'Faculty is required',
    }),
  }),
});
const academicDepartmentUpdateZodSchema = z.object({
  title: z.string({
    required_error: 'title is required',
  }),
  academicFaculty: z
    .string({
      required_error: 'Faculty is required',
    })
    .optional(),
});

export const AcademicDepartmentValidation = {
  academicDepartmentCreateZodSchema,
  academicDepartmentUpdateZodSchema,
};

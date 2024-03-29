import { z } from 'zod';

const academicFacultyCreateZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
});
const academicFacultyUpdateZodSchema = z.object({
  title: z.string({
    required_error: 'title is required',
  }),
});

export const AcademicFacultyValidation = {
  academicFacultyCreateZodSchema,
  academicFacultyUpdateZodSchema,
};

import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.academicFacultyCreateZodSchema),
  AcademicFacultyController.createAcademicFaculty
);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.academicFacultyUpdateZodSchema),
  AcademicFacultyController.updateAcademicFaculty
);

router.delete('/:id', AcademicFacultyController.deleteAcademicFaculty);

router.get('/', AcademicFacultyController.getAllAcademicFaculty);

export const AcademicFacultyRoutes = router;

import { Model, ObjectId } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export type IAcademicDepartment = {
  title: string;
  academicFaculty: ObjectId | IAcademicFaculty;
};

export type AcademicDepartmentModel = Model<IAcademicDepartment, object>;

export type IAcademicDepartmentFilters = {
  searchTerm?: string;
  title?: string;
};

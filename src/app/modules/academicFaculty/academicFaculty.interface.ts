import { Model } from 'mongoose';

export type IAcademicFaculty = {
  title: string;
};

export type AcademicFacultyModel = Model<IAcademicFaculty, object>;

export type IAcademisFacultyFilters = {
  searchTerm?: string;
  title?: string;
};

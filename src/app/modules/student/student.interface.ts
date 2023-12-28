import { Model, ObjectId } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';
import { IAcademicDepartment } from '../academicDepartment/academicDepartment.interface';
import { IAcademicSemester } from '../academicSemester/academicSemester.interface';

type IGender = 'male' | 'female';

type IBloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type IStudent = {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth: string;
  gender: IGender;
  bloodGroup?: IBloodGroup;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
    address: string;
  };
  localGuardian: {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
  };
  academicFaculty: ObjectId | IAcademicFaculty;
  academicDepartment: ObjectId | IAcademicDepartment; // Assuming this should be the ID of the AcademicDepartment model
  academicSemester: ObjectId | IAcademicSemester; // Assuming this should be the ID of the AcademicSemester model
  profileImage?: string;
};

export type StudentModel = Model<IStudent, Record<string, unknown>>;

export type IStudentFilters = {
  searchTerm?: string;
  id?: string;
  bloodGroup?: string;
  email?: string;
  contactNo?: string;
  emergencyContactNo?: string;
};

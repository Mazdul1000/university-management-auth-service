import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import User from './user.model';

export const findLastStudentId = async () => {
  const lastUser = await User.findOne({ role: 'student' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id ? lastUser.id.substring(4) : undefined;
};

export const findLastFacultyId = async () => {
  const lastUser = await User.findOne({ role: 'faculty' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id ? lastUser.id.substring(2) : undefined;
};
export const findLastAdminId = async () => {
  const lastUser = await User.findOne({ role: 'admin' }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();

  return lastUser?.id ? lastUser.id.substring(2) : undefined;
};

export const generateStudentId = async (
  academicSemester: IAcademicSemester | null
): Promise<string> => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');

  //   increment id by 1
  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `${academicSemester?.year.substring(2)}${
    academicSemester?.code
  }${incrementedId}`;

  return incrementedId;
};

export const generateFacultyId = async () => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padEnd(5, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `F-${incrementedId}`;

  return incrementedId;
};
export const generateAdminId = async () => {
  const currentId = (await findLastAdminId()) || (0).toString().padEnd(5, '0');

  let incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrementedId = `A-${incrementedId}`;

  return incrementedId;
};

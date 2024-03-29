import {
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
  IAcademicSemesterTitle,
} from './academicSemester.interface';

export const academicSemesterMonths: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitles: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
];

export const academicSemesterCodes: IAcademicSemesterCode[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterTitleCodeMaper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const academicSemesterSearchableFileds = ['title', 'code', 'yer'];

export const academicSemesterFilterableFields = [
  'searchTerm',
  'title',
  'code',
  'year',
];

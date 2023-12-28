import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemesterFilterableFields } from './academicSemesterConstants';
// import { z } from 'zod'

const createSemester = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse<IAcademicSemester>(res, {
      statusCode: 201,
      success: true,
      message: 'Academic semester created successfully',
      data: result,
    });
  }
);

const getAllSemisters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicSemesterService.getAllSemisters(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: 200,
    success: true,
    message: 'Data found successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AcademicSemesterService.getSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Data found successfully',
    data: result,
  });
});

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  const { id } = req.params;

  const result = await AcademicSemesterService.updateSemester(
    id,
    academicSemesterData
  );

  sendResponse<IAcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester updated successfully',
    data: result,
  });
});

const deleteSemester = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await AcademicSemesterService.deleteSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: 200,
    success: true,
    message: 'Semester deleted successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemisters,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};

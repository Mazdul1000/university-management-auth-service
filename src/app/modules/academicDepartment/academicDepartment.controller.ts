import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartmentService } from './academicDepartment.service';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await AcademicDepartmentService.createDepartment(data);

  sendResponse<IAcademicDepartment>(res, {
    success: true,
    statusCode: 201,
    message: 'Academic department created successfully',
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title']);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicDepartmentService.getAllDepartments(
    paginationOptions,
    filters
  );

  sendResponse<IAcademicDepartment[]>(res, {
    success: true,
    statusCode: 200,
    message: 'Academic departments retrived successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.params;
  const result = await AcademicDepartmentService.updateDepartment(id, data);

  sendResponse<IAcademicDepartment>(res, {
    success: true,
    statusCode: 200,
    message: 'Academic department updated successfully',
    data: result,
  });
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await AcademicDepartmentService.deleteDepartment(id);

  sendResponse<IAcademicDepartment>(res, {
    success: true,
    statusCode: 200,
    message: 'Academic department deleted successfully',
    data: result,
  });
});

export const AcademicDepartmentController = {
  createDepartment,
  getAllDepartments,
  deleteDepartment,
  updateDepartment,
};

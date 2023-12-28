import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyServices } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicFaculty } from './academicFaculty.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;

    const result = await AcademicFacultyServices.createAcademicFaculty(data);

    sendResponse<IAcademicFaculty>(res, {
      success: true,
      statusCode: 201,
      message: 'Academic faculty created successfully',
      data: result,
    });
  }
);

const getAllAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, ['searchTerm', 'Title']);
    const paginationOptions = pick(req.query, paginationFields);
    const result = await AcademicFacultyServices.getAllAcademicFaculty(
      paginationOptions,
      filters
    );

    sendResponse<IAcademicFaculty[]>(res, {
      success: true,
      statusCode: 200,
      message: 'Academic faculties retrived successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const updateAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const { id } = req.params;
    const result = await AcademicFacultyServices.updateAcademicFaculty(
      id,
      data
    );

    sendResponse<IAcademicFaculty>(res, {
      success: true,
      statusCode: 200,
      message: 'Academic faculty updated successfully',
      data: result,
    });
  }
);

const deleteAcademicFaculty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await AcademicFacultyServices.deleteAcademicFaculty(id);

    sendResponse<IAcademicFaculty>(res, {
      success: true,
      statusCode: 200,
      message: 'Academic faculty deleted successfully',
      data: result,
    });
  }
);

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  deleteAcademicFaculty,
  updateAcademicFaculty,
};

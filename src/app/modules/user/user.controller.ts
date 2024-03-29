import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { student, ...userData } = req.body;

    const result = await UserService.createStudent(student, userData);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  }
);

export const UserController = {
  createStudent,
};

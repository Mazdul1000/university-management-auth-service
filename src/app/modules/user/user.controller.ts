import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createUser = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const user = req.body;
    const result = await UserService.createUser(user);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};

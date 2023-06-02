import { Request, Response } from 'express'
import usersService from './users.service'

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.body
    const result = await usersService.createUser(user)

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err: unknown) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}

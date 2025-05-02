import { Request, Response } from 'express';
import { createUser } from '../services/auth.service';
import { logger } from '../../lib/logger';

export const register = async (req: Request, res: Response): Promise<void> => {
  const user = req.body;

  try {
    const newUser = await createUser(user);
    res.status(201).json(newUser);
  } catch (error: any) {
    logger.error('Error on register:', error);
    res.status(400).json({ error: error.message || 'Unexpected error' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  console.log('Called login');
  // const { username, password } = req.body;

  // try {
  //   const token = await authenticateUser(username, password);
  //   res.status(200).json({ message: 'Login successful', token });
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
};

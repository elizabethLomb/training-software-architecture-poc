import { Request, Response } from 'express';
import { authenticateUser, createUser } from '../services/auth.service';
import { logger } from '../../lib/logger';

export const register = async (req: Request, res: Response): Promise<void> => {
  const user = req.body;

  try {
    const newUser = await createUser(user);
    res.status(res.statusCode).json(newUser);
  } catch (error: any) {
    logger.error('Error on register:', error);
    res.status(400).json({ error: error.message || 'Unexpected error' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const token = await authenticateUser(email, password);
    res.status(res.statusCode).json(token);
  } catch (error: any) {
    logger.error('Error on register:', error);
    res.status(400).json({ error: error.message || 'Unexpected error' });
  }
};

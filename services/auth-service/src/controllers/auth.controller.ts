import { Request, Response } from 'express';
// import { createUser, authenticateUser } from '../services/auth.service';

export const register = async (req: Request, res: Response): Promise<void> => {
  console.log('Called register');
  // const { username, password } = req.body;
  
  // try {
  //   const newUser = await createUser(username, password);
  //   res.status(201).json({ message: 'User registered successfully', user: newUser });
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
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

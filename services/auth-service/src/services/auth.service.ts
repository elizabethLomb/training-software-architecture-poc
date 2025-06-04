import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import { User } from '../models/v1/User';
import sql from '../store/db';
import { hashPassword } from '../utils/hash';
import { logger } from '../../lib/logger';

const SECRET_KEY = 'your-secret-key';

export const findUserByEmail = async (email: string) => {
  const [user] = await sql`
    SELECT * FROM users WHERE email = ${email} AND is_deleted = false;
  `;
  return user;
};

export const createUser = async (data: User) => {
  if (!data.email || !data.password) {
    throw new Error('Missing required fields');
  }

  const { name, last_name, email, role = 'guest', password } = data;
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error('Email already exists');
  }
  const hashedPassword = await hashPassword(password);

  try {
    const [user] = await sql`
      INSERT INTO users (name, last_name, email, role, password, is_deleted)
      VALUES (${name}, ${last_name}, ${email}, ${sql.json(role)}, ${hashedPassword}, DEFAULT)
      RETURNING id, name, email, role;
    `;
    return user;
  } catch (error) {
    logger.error('Database error:', error);
    throw new Error('Database error while creating user');
  }
};

export const authenticateUser = async (username: string, password: string) => {
  console.log('Called authenticateUser');
  // const user = users.find(user => user.username === username);
  // if (!user) {
  //   throw new Error('User not found');
  // }

  // const isPasswordValid = await bcrypt.compare(password, user.password);
  // if (!isPasswordValid) {
  //   throw new Error('Invalid credentials');
  // }

  // const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  // return token;
};

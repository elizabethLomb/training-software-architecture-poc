import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { omit } from 'lodash';
import { User } from '../models/v1/User';
import sql from '../store/db';
import { hashPassword } from '../utils/hash';
import { logger } from '../../lib/logger';
import config from '../../config';

export const findUserByEmail = async (email: string): Promise<User | null> => {
  if (!email) {
    throw new Error('Missing required field');
  }
  
  const [user] = await sql<User[]>`
    SELECT * FROM users WHERE email = ${email} AND is_deleted = false;
  `;
  return user;
};

export const createUser = async (data: User): Promise<Omit<User, 'password' | 'is_deleted'>> => {
  if (!data.email || !data.password) {
    throw new Error('Missing required fields');
  }

  const { name, last_name, email, role = ['guest'], password } = data;
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error('Email already exists');
  }
  const hashedPassword = await hashPassword(password);

  try {
    const [user] = await sql<Omit<User[], 'password' | 'is_deleted'>>`
      INSERT INTO users (name, last_name, email, role, password, is_deleted)
      VALUES (${name}, ${last_name}, ${email}, ${sql.json(role)}, ${hashedPassword}, DEFAULT)
      RETURNING id, name, last_name, email, role;
    `;

    logger.info(`User created with ID: ${user.id}`);

    return omit(user, 'password', 'is_deleted');
  } catch (error) {
    logger.error('Database error:', error);
    throw new Error('Database error while creating user');
  }
};

export const authenticateUser = async (email: string, password: string): Promise<string> => {
  if (!email || !password) {
    logger.error('Email or password is missing');
    throw new Error('Missing email or password');
  }

  const user = await findUserByEmail(email);

  if (!user || user.is_deleted) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    logger.error('Invalid password for user:', email);
    throw new Error('Invalid email or password');
  }

  const userPayload = {
    sub: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const SECRET_KEY = String(config.jwt.secret);

  const token = jwt.sign(userPayload, SECRET_KEY, {
    algorithm: 'HS256',
    expiresIn: Math.floor(Date.now() / 1000) + (60 * 60), // 1 hour
  });

  logger.info(`Authenticated user: ${user.id}`);
 return token;
};

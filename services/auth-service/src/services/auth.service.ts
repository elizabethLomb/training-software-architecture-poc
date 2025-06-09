import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/v1/User';
import sql from '../store/db';
import { hashPassword } from '../utils/hash';
import { logger } from '../../lib/logger';
import config from '../../config';

const SECRET_KEY = String(config.jwt.secret);
const TOKEN_EXPIRATION = Number(config.jwt.expires);

export const findUserByEmail = async (email: string) => {
  const [user] = await sql<User[]>`
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
    const [user] = await sql<User[]>`
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

export const authenticateUser = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error('Missing email or password');
  }

  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const userPayload = {
    sub: user.id,
    name: user.name,
    lastName: user.last_name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(userPayload, SECRET_KEY, {
    expiresIn: TOKEN_EXPIRATION,
  });

  logger.info(`Authenticated user: ${user.id}`);
 return token;
};

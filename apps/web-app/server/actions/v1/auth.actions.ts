'use server';

import { developmentConfig } from '@/config/development';
import { RegisterFormProps } from '@/interfaces/v1/Forms';
import { User } from '@/interfaces/v1/User';

const { services } = developmentConfig;

export const loginUser = async (email: string, password: string): Promise<User> => {
  const response = await fetch(`${services['service-auth'].gateway}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json()  as User;
  return data;
};

export const registerUser = async (formData: RegisterFormProps):Promise<User> => {
  try {
    const response = await fetch(`${services['service-auth'].gateway}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json()  as User;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error registering the user');
  }
};
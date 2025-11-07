'use server';

import { RegisterFormProps } from '@/interfaces/v1/Forms';
import { User } from '@/interfaces/v1/User';

export const loginUser = async (email: string, password: string): Promise<User> => {
  const response = await fetch('http://127.0.0.1:5001/identity/login', {
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
    const response = await fetch('http://127.0.0.1:5001/identity/register', {
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
'use server';

import { RegisterFormProps } from '@/interfaces/v1/Forms';

// : Promise<User>
export const signupUser = (formData: RegisterFormProps) => {
  try {
    return formData;
  } catch (error) {
    console.error(error);
    throw new Error('Error registering the user');
  }
  // 'use server';
  // const res = await fetch('/api/v1/auth/register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData),
  // });

  // if (!res.ok) {
  //   throw new Error('Failed to register');
  // }

  // const data = await res.data.json();

  // return data;
};
'use client';
import { RegisterFormProps } from '@/interfaces/v1/Forms';
import { loginUser } from '@/server/actions/v1/auth.actions';
import { Button, Paper, TextField, Typography } from '@mui/material';
import * as React from 'react';

export const LoginForm = () => {
  const [formData, setFormData] = React.useState<Pick<RegisterFormProps, 'email' | 'password'>>({
    email: '',
    password: '',
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginUser(formData.email, formData.password);
    } catch (error: unknown) {
      // TODO DISPLAY ERROR ON UI
      console.error('Registration failed', error);
    }
  };

  return(
    <Paper
      variant="outlined"
      sx={{ maxWidth: 600, margin: 'auto', padding: 4, textAlign: 'center' }}
    >
      <Typography component="h2" variant="h5">Register</Typography>
      <form id="form-register" onSubmit={(e) => void handleOnsubmit(e)}>
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          type="email"
          onChange={handleOnChange}
          value={formData.email}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          onChange={handleOnChange}
          value={formData.password}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          disableElevation
          size="large"
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};
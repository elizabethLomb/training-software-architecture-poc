'use client';
import * as React from 'react';
import { Paper, Button, TextField, Typography } from '@mui/material';
import { RegisterFormProps } from '@/interfaces/v1/Forms';
import Link from 'next/link';
import { ROUTES } from '@/constants/v1/routes';

export const FormRegister: React.FC = () => {
  const [formData, setFormData] = React.useState<RegisterFormProps>({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Paper
      variant="outlined"
      sx={{ maxWidth: 600, margin: 'auto', padding: 4, textAlign: 'center' }}
    >
      <Typography component="h2" variant="h5">Register</Typography>
      <form id="form-register" onSubmit={handleOnsubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          onChange={handleOnChange}
          value={formData.name}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          onChange={handleOnChange}
          value={formData.lastName}
        />
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
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          onChange={handleOnChange}
          value={formData.confirmPassword}
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
          Register
        </Button>
        <Link href={ROUTES.PUBLIC.LOGIN}>I already have an account</Link>
      </form>
    </Paper>
  );
};
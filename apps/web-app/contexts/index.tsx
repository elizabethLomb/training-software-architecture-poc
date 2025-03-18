import * as React from 'react';
import theme from '@/theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const AppProviders = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { AppProviders };
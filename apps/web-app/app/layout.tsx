import * as React from 'react';
import { AppProviders } from '@/contexts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Header } from '@/components/common';
import { User } from '@/interfaces/v1/User';
import { Container } from '@mui/material';

export const metadata = {
  title: 'Web App',
  description: 'POC Web app nextjs',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fakeUser = {} as User;
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <AppProviders>
            <Header user={fakeUser} />
            <Container component={'main'} sx={{ paddingTop: 14}}maxWidth="xl">
              {children}
            </Container>
          </AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

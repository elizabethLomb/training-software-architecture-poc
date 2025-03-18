import * as React from 'react';
import { AppProviders } from '@/contexts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

export const metadata = {
  title: 'Web App',
  description: 'POC Web app nextjs',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <AppProviders>
            <main>{children}</main>
          </AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

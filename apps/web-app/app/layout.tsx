import * as React from 'react';
import { AppProviders } from '@/contexts';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: 'Web App',
  description: 'POC Web app nextjs',
};

const montserrat = Montserrat({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <AppProviders>
            {children}
          </AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

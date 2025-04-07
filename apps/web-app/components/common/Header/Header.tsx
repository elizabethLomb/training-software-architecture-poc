import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
} from '@mui/material';
import { ROUTES } from '@/constants/v1/routes';
import { User } from '@/interfaces/v1/User';
import { CustomLink, ProfileDropdown } from '@/components/common/index';
import Image from 'next/image';
interface HeaderProps {
  user: User
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <AppBar component="nav" position="fixed" color="inherit" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar>
          <CustomLink url={ROUTES.PUBLIC.HOME} sx={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/assets/images/logo.png" alt="Logo" width={100} height={80} style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </CustomLink>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <CustomLink url={ROUTES.PUBLIC.HOME}>Home</CustomLink>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ProfileDropdown user={user} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
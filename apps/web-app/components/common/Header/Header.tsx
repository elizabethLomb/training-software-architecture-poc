import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
} from '@mui/material';
import BedroomParentRoundedIcon from '@mui/icons-material/BedroomParentRounded';
import { ROUTES } from '@/constants/v1/routes';
import { User } from '@/interfaces/v1/User';
import { CustomLink, ProfileDropdown } from '@/components/common/index';

interface HeaderProps {
  user: User
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <AppBar component="nav" position="fixed" color="inherit">
      <Container maxWidth="xl">
        <Toolbar>
          <CustomLink url={ROUTES.PUBLIC.HOME} sx={{ display: 'flex', alignItems: 'center' }}>
            <BedroomParentRoundedIcon sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6" noWrap component="h6" mr={2}>
              LOGO
            </Typography>
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
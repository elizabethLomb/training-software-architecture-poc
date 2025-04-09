'use client';

import * as React from 'react';
import { ROUTES } from '@/constants/v1/routes';
import { User } from '@/interfaces/v1/User';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { CustomLink } from '@/components/common/index';
import { StyledIconButton } from './styles';

interface ProfileDropdownProps {
  user: User
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const logInUser: { title: string; url: string }[] = [
    { title: 'Profile', url: ROUTES.PUBLIC.PROFILE },
    { title: 'Logout', url: ROUTES.PUBLIC.LOGOUT }
  ];
  const logOutUser: { title: string; url: string }[] = [
    { title: 'Register', url: ROUTES.PUBLIC.REGISTER },
    { title: 'Login', url: ROUTES.PUBLIC.LOGIN }
  ];

  const handleOnClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="Change language">
          <IconButton color="inherit"><LanguageIcon /></IconButton>
        </Tooltip>
        <Tooltip title="Open settings">
          <StyledIconButton onClick={handleOnClick} sx={{ p: 0 }}>
            <MenuRoundedIcon />
            <Avatar
              alt={user?.name ?? ''}
              src={!user ? '/static/images/avatar/2.jpg' : user?.picture}
            />
          </StyledIconButton>
        </Tooltip>
      </Box>
      <Menu
        id="profile-dropdown"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleOnClose}
      >
        {(!Object.keys(user).length ? logOutUser : logInUser).map(({ title, url }) => (
          <MenuItem key={title}>
            <CustomLink url={url}>{title}</CustomLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
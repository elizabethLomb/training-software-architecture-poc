'use client';

import * as React from 'react';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { ROUTES } from '@/constants/v1/routes';
import { User } from '@/interfaces/v1/User';
import { CustomLink } from '@/components/common/index';

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
      <Tooltip title="Open settings">
        <IconButton onClick={handleOnClick} sx={{ p: 0 }}>
          <Avatar
            alt={user?.name ?? ''}
            src={!user ? '/static/images/avatar/2.jpg' : user?.picture}
          />
        </IconButton>
      </Tooltip>
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
        {(!user ? logOutUser : logInUser).map(({ title, url }) => (
          <MenuItem key={title}>
            <CustomLink url={url}>{title}</CustomLink>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
import * as React from 'react';
import {
  AppBar,
  Container,
  Menu,
  Toolbar,
  Typography,
  Box,
  Avatar, Button, IconButton, MenuItem, Tooltip } from '@mui/material';
import BedroomParentRoundedIcon from '@mui/icons-material/BedroomParentRounded';

export const Header: React.FC = () => {
  return (
    <AppBar component="nav" position="sticky" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BedroomParentRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="h6">
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Menu open={false}>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
'use client';

import * as React from 'react';
import { StyledLink } from './styles';
import { SxProps, Theme } from '@mui/material';

interface CustomLinkProps {
  url: string
  children: React.ReactNode | string
  sx?: SxProps<Theme>
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  url = '#', children, sx
}) => (
  <StyledLink sx={sx} href={url}>{children}</StyledLink>
);
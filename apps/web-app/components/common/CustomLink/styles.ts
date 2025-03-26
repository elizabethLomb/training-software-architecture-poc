import { styled } from '@mui/material';
import Link from 'next/link';

export const StyledLink = styled(Link)(({ theme, color }) => ({
  color: color ?? 'inherit',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.secondary.main,
  },
}));
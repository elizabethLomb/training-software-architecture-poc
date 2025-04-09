import { IconButton, Menu, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '50px',
  marginLeft: '15px',

  'svg, .MuiAvatar-root': {
    width: '35px',
    height: '35px',
    margin: '5px',
    padding: '5px 0',
    color: theme.palette.grey[700],
  },
  '.MuiAvatar-root svg': {
    margin: '0',
  }
}));
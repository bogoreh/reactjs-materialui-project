import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';

const StyledButton = styled(MuiButton)(({ theme, variant, size = 'medium' }) => ({
  borderRadius: theme.shape.borderRadius,
  fontWeight: theme.typography.button.fontWeight,
  textTransform: 'none',
  transition: 'all 0.2s ease-in-out',
  
  ...(size === 'small' && {
    padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
    fontSize: '0.875rem',
  }),
  
  ...(size === 'medium' && {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    fontSize: '1rem',
  }),
  
  ...(size === 'large' && {
    padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
    fontSize: '1.125rem',
  }),

  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: theme.shadows[4],
  },

  '&:active': {
    transform: 'translateY(0)',
  },
}));

export const Button = ({ children, variant = 'contained', size = 'medium', ...props }) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export const IconButton = styled(MuiButton)(({ theme }) => ({
  minWidth: 'auto',
  width: 40,
  height: 40,
  borderRadius: '50%',
  padding: 0,
}));
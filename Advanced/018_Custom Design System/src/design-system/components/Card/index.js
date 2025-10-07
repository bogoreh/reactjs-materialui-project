import React from 'react';
import { Card as MuiCard, CardContent, CardActions, styled } from '@mui/material';

const StyledCard = styled(MuiCard)(({ theme, variant = 'elevated' }) => ({
  borderRadius: theme.shape.borderRadius,
  border: variant === 'outlined' ? `1px solid ${theme.palette.grey[200]}` : 'none',
  boxShadow: variant === 'elevated' ? theme.shadows[3] : 'none',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  
  '&:hover': {
    transform: variant === 'elevated' ? 'translateY(-2px)' : 'none',
    boxShadow: variant === 'elevated' ? theme.shadows[6] : theme.shadows[1],
  },
}));

const CardHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  backgroundColor: theme.palette.grey[50],
}));

const CardFooter = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.grey[100]}`,
  backgroundColor: theme.palette.grey[50],
}));

export const Card = ({ 
  children, 
  variant = 'elevated', 
  header, 
  footer, 
  actions,
  ...props 
}) => {
  return (
    <StyledCard variant={variant} {...props}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </StyledCard>
  );
};
import React from 'react';
import { Typography as MuiTypography, styled } from '@mui/material';

export const DisplayText = styled(MuiTypography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 800,
  lineHeight: 1.1,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

export const SectionTitle = styled(MuiTypography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  position: 'relative',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: 40,
    height: 3,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

export const GradientText = styled(MuiTypography)(({ theme, gradient = 'primary' }) => {
  const gradients = {
    primary: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    success: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.primary.main} 100%)`,
    warning: `linear-gradient(135deg, ${theme.palette.warning.main} 0%, ${theme.palette.error.main} 100%)`,
  };

  return {
    background: gradients[gradient] || gradients.primary,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
  };
});
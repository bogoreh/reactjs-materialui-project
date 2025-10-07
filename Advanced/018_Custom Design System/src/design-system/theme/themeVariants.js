import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: 'dark',
    background: {
      default: '#0f172a',
      paper: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
  },
});

export const compactTheme = createTheme({
  ...baseTheme,
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
  typography: {
    ...baseTheme.typography,
    h1: { ...baseTheme.typography.h1, fontSize: '2.5rem' },
    h2: { ...baseTheme.typography.h2, fontSize: '2rem' },
    h3: { ...baseTheme.typography.h3, fontSize: '1.5rem' },
  },
});

export const elegantTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    primary: {
      main: '#059669',
      light: '#10b981',
      dark: '#047857',
    },
    secondary: {
      main: '#7c3aed',
      light: '#8b5cf6',
      dark: '#6d28d9',
    },
  },
  shape: {
    borderRadius: 12,
  },
});
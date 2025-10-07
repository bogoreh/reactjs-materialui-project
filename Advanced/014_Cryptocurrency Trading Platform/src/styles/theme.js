import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff88',
      light: '#66ffaa',
      dark: '#00cc66',
    },
    secondary: {
      main: '#2962ff',
      light: '#768fff',
      dark: '#0039cb',
    },
    background: {
      default: '#0a0e17',
      paper: '#131a2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b8c5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});
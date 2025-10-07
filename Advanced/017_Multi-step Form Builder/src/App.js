import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { FormBuilderProvider } from './contexts/FormBuilderContext';
import FormBuilder from './components/FormBuilder/FormBuilder';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormBuilderProvider>
        <Box sx={{ minHeight: '100vh' }}>
          <FormBuilder />
        </Box>
      </FormBuilderProvider>
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './styles/theme';
import DashboardHeader from './components/dashboard/DashboardHeader';
import DashboardGrid from './components/dashboard/DashboardGrid';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <DashboardHeader />
        <DashboardGrid />
      </Box>
    </ThemeProvider>
  );
}

export default App;
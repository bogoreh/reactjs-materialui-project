import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import VideoCall from './components/VideoCall';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VideoCall />
    </ThemeProvider>
  );
}

export default App;
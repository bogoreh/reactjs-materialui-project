// App.js
import React, { useState, useEffect } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box
} from '@mui/material';
import { deepPurple, pink } from '@mui/material/colors';
import Feed from './components/feed/Feed';
import BottomNav from './components/navigation/BottomNav';
import UserProfile from './components/user/UserProfile';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: deepPurple,
    secondary: pink,
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
        }
      }
    }
  }
});

function App() {
  const [currentView, setCurrentView] = useState('feed');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock user data
    setUser({
      id: '1',
      name: 'John Doe',
      username: '@johndoe',
      avatar: '/static/images/avatar/1.jpg',
      bio: 'Digital creator & tech enthusiast'
    });
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'profile':
        return <UserProfile user={user} />;
      case 'feed':
      default:
        return <Feed />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 0
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            SocialFeed
          </Typography>
        </Toolbar>
      </AppBar>

      <Container 
        maxWidth="sm" 
        sx={{ 
          pb: 8,
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #f5f5f5 0%, #e8eaf6 100%)'
        }}
      >
        <Box sx={{ py: 2 }}>
          {renderView()}
        </Box>
      </Container>

      <BottomNav currentView={currentView} onViewChange={setCurrentView} />
    </ThemeProvider>
  );
}

export default App;
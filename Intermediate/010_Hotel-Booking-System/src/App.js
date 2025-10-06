// src/App.js
import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Box
} from '@mui/material';
import BookingStepper from './components/BookingStepper';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E8B57',
      light: '#3CB371',
      dark: '#228B22',
    },
    secondary: {
      main: '#FF7F50',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

const App = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: null,
    checkOut: null,
    rooms: 1,
    guests: 1,
    selectedRoom: null,
    guestInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: ''
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            🏨 Luxury Stay Hotels
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box sx={{ backgroundColor: 'rgba(0,0,0,0.6)', p: 4, borderRadius: 2 }}>
          <Typography variant="h3" gutterBottom>
            Book Your Perfect Stay
          </Typography>
          <Typography variant="h6">
            Discover luxury accommodations with world-class amenities
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
          }}
        >
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            color="primary"
            sx={{ mb: 4 }}
          >
            Hotel Reservation
          </Typography>
          
          <BookingStepper 
            bookingData={bookingData} 
            setBookingData={setBookingData} 
          />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
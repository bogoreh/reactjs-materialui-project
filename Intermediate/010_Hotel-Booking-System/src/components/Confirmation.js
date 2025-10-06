import React from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const Confirmation = ({ bookingData, updateBookingData }) => {
  const calculateTotal = () => {
    if (!bookingData.selectedRoom || !bookingData.checkIn || !bookingData.checkOut) return 0;
    
    const nights = Math.ceil((bookingData.checkOut - bookingData.checkIn) / (1000 * 60 * 60 * 24));
    const roomPrice = bookingData.selectedRoom.price * nights * bookingData.rooms;
    const tax = roomPrice * 0.12;
    const serviceFee = 25;
    
    return roomPrice + tax + serviceFee;
  };

  const handleGuestInfoChange = (field, value) => {
    updateBookingData({
      guestInfo: {
        ...bookingData.guestInfo,
        [field]: value
      }
    });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom color="primary">
        Confirm Your Booking
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Guest Information
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                value={bookingData.guestInfo.firstName}
                onChange={(e) => handleGuestInfoChange('firstName', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={bookingData.guestInfo.lastName}
                onChange={(e) => handleGuestInfoChange('lastName', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={bookingData.guestInfo.email}
                onChange={(e) => handleGuestInfoChange('email', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                value={bookingData.guestInfo.phone}
                onChange={(e) => handleGuestInfoChange('phone', e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Special Requests"
                multiline
                rows={3}
                value={bookingData.guestInfo.specialRequests}
                onChange={(e) => handleGuestInfoChange('specialRequests', e.target.value)}
                placeholder="Any special requirements or requests..."
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
            <Typography variant="h6" gutterBottom>
              Booking Summary
            </Typography>
            
            {bookingData.selectedRoom && (
              <>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary={bookingData.selectedRoom.name}
                      secondary={`${bookingData.rooms} room(s) × ${Math.ceil((bookingData.checkOut - bookingData.checkIn) / (1000 * 60 * 60 * 24))} nights`}
                    />
                    <Typography>${bookingData.selectedRoom.price * bookingData.rooms * Math.ceil((bookingData.checkOut - bookingData.checkIn) / (1000 * 60 * 60 * 24))}</Typography>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText primary="Service Fee" />
                    <Typography>$25.00</Typography>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText primary="Tax (12%)" />
                    <Typography>${(bookingData.selectedRoom.price * bookingData.rooms * Math.ceil((bookingData.checkOut - bookingData.checkIn) / (1000 * 60 * 60 * 24)) * 0.12).toFixed(2)}</Typography>
                  </ListItem>
                  
                  <Divider sx={{ my: 1 }} />
                  
                  <ListItem>
                    <ListItemText primary="Total" />
                    <Typography variant="h6" color="primary">
                      ${calculateTotal().toFixed(2)}
                    </Typography>
                  </ListItem>
                </List>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Check-in: {bookingData.checkIn?.toLocaleDateString()} from 3:00 PM
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Check-out: {bookingData.checkOut?.toLocaleDateString()} until 11:00 AM
                  </Typography>
                </Box>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Confirmation;
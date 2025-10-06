import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DateSelection = ({ bookingData, updateBookingData }) => {
  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const diffTime = Math.abs(bookingData.checkOut - bookingData.checkIn);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        <Typography variant="h5" gutterBottom color="primary">
          Select Your Stay Dates
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Choose your check-in and check-out dates
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Check-in Date"
              value={bookingData.checkIn}
              onChange={(newValue) => updateBookingData({ checkIn: newValue })}
              renderInput={(params) => <TextField {...params} fullWidth />}
              minDate={new Date()}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <DatePicker
              label="Check-out Date"
              value={bookingData.checkOut}
              onChange={(newValue) => updateBookingData({ checkOut: newValue })}
              renderInput={(params) => <TextField {...params} fullWidth />}
              minDate={bookingData.checkIn || new Date()}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Rooms</InputLabel>
              <Select
                value={bookingData.rooms}
                label="Rooms"
                onChange={(e) => updateBookingData({ rooms: e.target.value })}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <MenuItem key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Guests</InputLabel>
              <Select
                value={bookingData.guests}
                label="Guests"
                onChange={(e) => updateBookingData({ guests: e.target.value })}
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <MenuItem key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {calculateNights() > 0 && (
          <Card sx={{ mt: 3, bgcolor: 'primary.light', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">
                {calculateNights()} Night{calculateNights() > 1 ? 's' : ''} Selected
              </Typography>
              <Typography>
                {bookingData.checkIn?.toLocaleDateString()} - {bookingData.checkOut?.toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default DateSelection;
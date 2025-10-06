import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  Paper
} from '@mui/material';
import DateSelection from './DateSelection';
import RoomSelection from './RoomSelection';
import Confirmation from './Confirmation';

const steps = ['Select Dates', 'Choose Room', 'Confirm Booking'];

const BookingStepper = ({ bookingData, setBookingData }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const updateBookingData = (newData) => {
    setBookingData(prev => ({ ...prev, ...newData }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <DateSelection 
            bookingData={bookingData} 
            updateBookingData={updateBookingData} 
          />
        );
      case 1:
        return (
          <RoomSelection 
            bookingData={bookingData} 
            updateBookingData={updateBookingData} 
          />
        );
      case 2:
        return (
          <Confirmation 
            bookingData={bookingData} 
            updateBookingData={updateBookingData} 
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        {getStepContent(activeStep)}
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="outlined"
        >
          Back
        </Button>
        
        {activeStep === steps.length - 1 ? (
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => alert('Booking Confirmed! Thank you for your reservation.')}
          >
            Confirm Booking
          </Button>
        ) : (
          <Button 
            variant="contained" 
            onClick={handleNext}
            disabled={
              (activeStep === 0 && (!bookingData.checkIn || !bookingData.checkOut)) ||
              (activeStep === 1 && !bookingData.selectedRoom)
            }
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BookingStepper;
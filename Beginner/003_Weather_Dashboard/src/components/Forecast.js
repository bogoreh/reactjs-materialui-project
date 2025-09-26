import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

const Forecast = ({ data }) => {
  if (!data || !data.list) return null;

  // Group forecast by day
  const dailyForecast = data.list.filter((item, index) => index % 8 === 0);

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          5-Day Forecast
        </Typography>
        <Grid container spacing={2}>
          {dailyForecast.map((day, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Box textAlign="center" p={2}>
                <Typography variant="subtitle2" gutterBottom>
                  {formatDate(day.dt)}
                </Typography>
                <Typography variant="h6" color="primary">
                  {Math.round(day.main.temp)}°C
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {day.weather[0].description}
                </Typography>
                <Box mt={1}>
                  <Typography variant="caption">
                    H: {Math.round(day.main.temp_max)}°C
                  </Typography>
                  <Typography variant="caption" display="block">
                    L: {Math.round(day.main.temp_min)}°C
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Forecast;
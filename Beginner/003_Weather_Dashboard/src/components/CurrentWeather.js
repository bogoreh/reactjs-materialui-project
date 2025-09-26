import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  WbSunny,
  Cloud,
  Opacity,
  Air,
  Thunderstorm,
} from '@mui/icons-material';

const WeatherIcon = ({ main }) => {
  const iconMap = {
    Clear: <WbSunny sx={{ fontSize: 64, color: '#FFA726' }} />,
    Clouds: <Cloud sx={{ fontSize: 64, color: '#78909C' }} />,
    Rain: <Opacity sx={{ fontSize: 64, color: '#42A5F5' }} />,
    Drizzle: <Opacity sx={{ fontSize: 64, color: '#42A5F5' }} />,
    Thunderstorm: <Thunderstorm sx={{ fontSize: 64, color: '#5C6BC0' }} />,
    Snow: <Cloud sx={{ fontSize: 64, color: '#90CAF9' }} />,
  };

  return iconMap[main] || <WbSunny sx={{ fontSize: 64 }} />;
};

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h4" gutterBottom>
              {data.name}, {data.sys.country}
            </Typography>
            <Typography variant="h2" color="primary">
              {Math.round(data.main.temp)}°C
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {data.weather[0].description}
            </Typography>
          </Box>
          <WeatherIcon main={data.weather[0].main} />
        </Box>

        <Box display="flex" justifyContent="space-around" mt={2}>
          <Box textAlign="center">
            <Air sx={{ color: '#78909C' }} />
            <Typography variant="body2">Wind</Typography>
            <Typography variant="h6">{data.wind.speed} m/s</Typography>
          </Box>
          <Box textAlign="center">
            <Opacity sx={{ color: '#42A5F5' }} />
            <Typography variant="body2">Humidity</Typography>
            <Typography variant="h6">{data.main.humidity}%</Typography>
          </Box>
          <Box textAlign="center">
            <Cloud sx={{ color: '#78909C' }} />
            <Typography variant="body2">Pressure</Typography>
            <Typography variant="h6">{data.main.pressure} hPa</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
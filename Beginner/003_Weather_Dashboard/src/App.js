import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { weatherAPI } from './services/weatherAPI';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [error, setError] = useState('');

  const searchCity = async (city) => {
    setError('');
    
    try {
      const [currentData, forecastData] = await Promise.all([
        weatherAPI.getCurrentWeather(city),
        weatherAPI.getForecast(city),
      ]);
      
      setCurrentWeather(currentData);
      setForecast(forecastData);
      setTabValue(0);
    } catch (err) {
      setError(err.message);
      setCurrentWeather(null);
      setForecast(null);
    }
  };

  useEffect(() => {
    // Load default city on initial render
    searchCity('London');
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCloseError = () => {
    setError('');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Weather Dashboard
      </Typography>

      <SearchBar onSearch={searchCity} />

      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Current Weather" />
        <Tab label="5-Day Forecast" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <CurrentWeather data={currentWeather} />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Forecast data={forecast} />
      </TabPanel>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default App;
import React from 'react';
import { ThemeProvider, CssBaseline, Container, Grid, Box } from '@mui/material';
import { TradingProvider } from './context/TradingContext';
import { darkTheme } from './styles/theme';
import Header from './components/Header';
import Chart from './components/Chart';
import OrderBook from './components/OrderBook';
import TradingHistory from './components/TradingHistory';
import TradingPanel from './components/TradingPanel';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TradingProvider>
        <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0e17 0%, #131a2a 100%)' }}>
          <Header />
          <Container maxWidth="xl" sx={{ py: 3 }}>
            <Grid container spacing={3}>
              {/* Left Column - Chart and Trading Panel */}
              <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Chart />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TradingPanel />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TradingHistory />
                  </Grid>
                </Grid>
              </Grid>
              
              {/* Right Column - Order Book */}
              <Grid item xs={12} lg={4}>
                <OrderBook />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </TradingProvider>
    </ThemeProvider>
  );
}

export default App;
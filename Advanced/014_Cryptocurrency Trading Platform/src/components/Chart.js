import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

export default function Chart() {
  // Mock chart data
  const generateChartData = () => {
    const data = [];
    const basePrice = 50000;
    let currentPrice = basePrice;
    
    for (let i = 0; i < 50; i++) {
      currentPrice = currentPrice * (1 + (Math.random() - 0.5) * 0.002);
      data.push({
        time: i,
        price: currentPrice,
      });
    }
    
    return data;
  };

  const chartData = generateChartData();
  const currentPrice = chartData[chartData.length - 1]?.price || 0;
  const priceChange = ((currentPrice - chartData[0]?.price) / chartData[0]?.price * 100) || 0;

  return (
    <Paper sx={{ p: 3, height: 400, background: 'linear-gradient(145deg, #131a2a 0%, #0f1522 100%)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          BTC/USD Chart
        </Typography>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="h5" fontWeight="bold" color={priceChange >= 0 ? 'primary.main' : 'error.main'}>
            ${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Typography>
          <Typography variant="body2" color={priceChange >= 0 ? 'primary.main' : 'error.main'}>
            {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
          </Typography>
        </Box>
      </Box>
      
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00ff88" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a3245" />
          <XAxis dataKey="time" stroke="#b0b8c5" />
          <YAxis stroke="#b0b8c5" domain={['dataMin - 100', 'dataMax + 100']} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#131a2a',
              border: '1px solid #2a3245',
              borderRadius: '8px',
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#00ff88"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}
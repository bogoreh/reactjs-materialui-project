import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { useTrading } from '../context/TradingContext';

export default function Header() {
  const { state, dispatch } = useTrading();

  const tradingPairs = [
    'BTC/USD',
    'ETH/USD',
    'SOL/USD',
    'ADA/USD',
    'DOT/USD'
  ];

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'linear-gradient(90deg, #131a2a 0%, #0a0e17 100%)',
        borderBottom: '1px solid #2a3245'
      }}
    >
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          CRYPTO<span style={{ color: '#00ff88' }}>TRADE</span>
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={state.selectedPair}
              onChange={(e) => dispatch({ type: 'SET_PAIR', payload: e.target.value })}
              sx={{ 
                background: 'rgba(255,255,255,0.1)',
                '& .MuiSelect-select': { py: 1 }
              }}
            >
              {tradingPairs.map(pair => (
                <MenuItem key={pair} value={pair}>{pair}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Chip
            label={state.connected ? 'CONNECTED' : 'DISCONNECTED'}
            color={state.connected ? 'primary' : 'error'}
            size="small"
            variant="outlined"
          />
          
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" color="primary.main" fontWeight="bold">
              ${state.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Live Price
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
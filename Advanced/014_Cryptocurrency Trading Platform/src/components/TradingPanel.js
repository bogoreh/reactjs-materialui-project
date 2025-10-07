import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from '@mui/material';
import { useTrading } from '../context/TradingContext';

export default function TradingPanel() {
  const { state, dispatch } = useTrading();
  const [orderType, setOrderType] = useState('market');
  const [side, setSide] = useState('buy');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate trade execution
    const trade = {
      id: Date.now(),
      price: orderType === 'market' ? state.price : parseFloat(price),
      amount: parseFloat(amount),
      side,
      time: new Date().toLocaleTimeString(),
    };
    
    dispatch({ type: 'ADD_TRADE', payload: trade });
    setAmount('');
    setPrice('');
  };

  const percentageOptions = [25, 50, 75, 100];

  return (
    <Paper sx={{ p: 3, background: 'linear-gradient(145deg, #131a2a 0%, #0f1522 100%)' }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Trade
      </Typography>

      <form onSubmit={handleSubmit}>
        <ToggleButtonGroup
          value={side}
          exclusive
          onChange={(e, newSide) => newSide && setSide(newSide)}
          sx={{ mb: 2, width: '100%' }}
        >
          <ToggleButton value="buy" sx={{ flex: 1, py: 1.5 }} color="primary">
            BUY
          </ToggleButton>
          <ToggleButton value="sell" sx={{ flex: 1, py: 1.5 }} color="error">
            SELL
          </ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          value={orderType}
          exclusive
          onChange={(e, newType) => newType && setOrderType(newType)}
          sx={{ mb: 2, width: '100%' }}
        >
          <ToggleButton value="market" sx={{ flex: 1, fontSize: '0.8rem' }}>
            Market
          </ToggleButton>
          <ToggleButton value="limit" sx={{ flex: 1, fontSize: '0.8rem' }}>
            Limit
          </ToggleButton>
        </ToggleButtonGroup>

        {orderType === 'limit' && (
          <TextField
            fullWidth
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1, color: 'text.secondary' }}>$</Typography>,
            }}
          />
        )}

        <TextField
          fullWidth
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          sx={{ mb: 2 }}
        />

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Quick Amount
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {percentageOptions.map(percent => (
              <Button
                key={percent}
                variant="outlined"
                size="small"
                onClick={() => setAmount((percent / 100).toString())}
                sx={{ flex: 1, fontSize: '0.7rem' }}
              >
                {percent}%
              </Button>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 2, borderColor: '#2a3245' }} />

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Estimated Total
          </Typography>
          <Typography variant="h6" color={side === 'buy' ? 'primary.main' : 'error.main'}>
            ${((orderType === 'market' ? state.price : parseFloat(price || 0)) * parseFloat(amount || 0)).toFixed(2)}
          </Typography>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            py: 1.5,
            background: side === 'buy' 
              ? 'linear-gradient(45deg, #00ff88, #00cc66)'
              : 'linear-gradient(45deg, #ff5252, #d32f2f)',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {side === 'buy' ? 'BUY BTC' : 'SELL BTC'}
        </Button>
      </form>
    </Paper>
  );
}
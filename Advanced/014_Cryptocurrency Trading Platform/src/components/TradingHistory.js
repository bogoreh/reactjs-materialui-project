import React from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Box
} from '@mui/material';
import { useTrading } from '../context/TradingContext';

export default function TradingHistory() {
  const { state } = useTrading();

  return (
    <Paper sx={{ p: 3, background: 'linear-gradient(145deg, #131a2a 0%, #0f1522 100%)' }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Recent Trades
      </Typography>
      
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>TIME</TableCell>
              <TableCell sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>PRICE</TableCell>
              <TableCell sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>AMOUNT</TableCell>
              <TableCell sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>SIDE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.trades.map((trade) => (
              <TableRow key={trade.id} sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' } }}>
                <TableCell sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                  {trade.time}
                </TableCell>
                <TableCell sx={{ 
                  color: trade.side === 'buy' ? 'primary.main' : 'error.main',
                  fontWeight: 'bold',
                  fontSize: '0.8rem'
                }}>
                  ${trade.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </TableCell>
                <TableCell sx={{ color: 'text.primary', fontSize: '0.8rem' }}>
                  {trade.amount}
                </TableCell>
                <TableCell>
                  <Chip
                    label={trade.side.toUpperCase()}
                    size="small"
                    color={trade.side === 'buy' ? 'primary' : 'error'}
                    sx={{ 
                      fontSize: '0.7rem',
                      height: 24,
                      minWidth: 60
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      {state.trades.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="body2" color="text.secondary">
            No trades yet
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
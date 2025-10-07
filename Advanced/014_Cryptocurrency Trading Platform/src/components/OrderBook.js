import React from 'react';
import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useTrading } from '../context/TradingContext';

export default function OrderBook() {
  const { state } = useTrading();
  const { bids = [], asks = [] } = state.orders;

  const OrderTable = ({ data, type }) => (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>PRICE</TableCell>
            <TableCell sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>AMOUNT</TableCell>
            <TableCell sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((order, index) => (
            <TableRow key={index} sx={{ 
              background: type === 'bid' 
                ? `linear-gradient(90deg, rgba(0, 255, 136, ${0.1 + index * 0.03}) 0%, transparent 100%)`
                : `linear-gradient(90deg, rgba(255, 82, 82, ${0.1 + index * 0.03}) 0%, transparent 100%)`
            }}>
              <TableCell sx={{ 
                color: type === 'bid' ? 'primary.main' : 'error.main',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}>
                ${order.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </TableCell>
              <TableCell sx={{ color: 'text.primary', fontSize: '0.8rem' }}>
                {order.amount}
              </TableCell>
              <TableCell sx={{ color: 'text.primary', fontSize: '0.8rem' }}>
                ${order.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Paper sx={{ p: 3, background: 'linear-gradient(145deg, #131a2a 0%, #0f1522 100%)' }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Order Book
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="primary.main" gutterBottom>
            BIDS
          </Typography>
          <OrderTable data={bids} type="bid" />
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" color="error.main" gutterBottom>
            ASKS
          </Typography>
          <OrderTable data={asks} type="ask" />
        </Box>
      </Box>
    </Paper>
  );
}
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Typography
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Food & Dining': '#FF6B6B',
      'Transportation': '#4ECDC4',
      'Shopping': '#45B7D1',
      'Entertainment': '#96CEB4',
      'Bills & Utilities': '#FFEAA7',
      'Healthcare': '#DDA0DD',
      'Travel': '#98D8C8',
      'Education': '#F7DC6F',
      'Other': '#BB8FCE'
    };
    return colors[category] || '#BDC3C7';
  };

  if (expenses.length === 0) {
    return (
      <Typography variant="body1" color="textSecondary" align="center" sx={{ py: 4 }}>
        No expenses recorded yet. Start by adding your first expense!
      </Typography>
    );
  }

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="expense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">Amount</TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow
              key={expense.id}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { backgroundColor: '#fafafa' }
              }}
            >
              <TableCell>{expense.date}</TableCell>
              <TableCell sx={{ fontWeight: 500 }}>{expense.description}</TableCell>
              <TableCell>
                <Chip
                  label={expense.category}
                  size="small"
                  sx={{
                    backgroundColor: getCategoryColor(expense.category),
                    color: 'white',
                    fontWeight: 500
                  }}
                />
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 600, color: '#D32F2F' }}>
                ${expense.amount.toFixed(2)}
              </TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => onDeleteExpense(expense.id)}
                  color="error"
                  size="small"
                  sx={{
                    '&:hover': {
                      backgroundColor: '#ffebee'
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { TrendingUp, AccountBalanceWallet, ShoppingCart, Restaurant } from '@mui/icons-material';

const MonthlySummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const topCategory = Object.keys(categoryTotals).reduce((a, b) => 
    categoryTotals[a] > categoryTotals[b] ? a : b, 'N/A'
  );

  const summaryCards = [
    {
      title: 'Total Expenses',
      value: `$${totalExpenses.toFixed(2)}`,
      icon: <AccountBalanceWallet sx={{ fontSize: 40 }} />,
      color: '#FF6B6B'
    },
    {
      title: 'Transactions',
      value: expenses.length,
      icon: <ShoppingCart sx={{ fontSize: 40 }} />,
      color: '#4ECDC4'
    },
    {
      title: 'Top Category',
      value: topCategory,
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: '#45B7D1'
    },
    {
      title: 'Average Expense',
      value: `$${expenses.length > 0 ? (totalExpenses / expenses.length).toFixed(2) : '0.00'}`,
      icon: <Restaurant sx={{ fontSize: 40 }} />,
      color: '#96CEB4'
    }
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2E7D32', mb: 3 }}>
        Monthly Overview
      </Typography>
      
      <Grid container spacing={3}>
        {summaryCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                background: `linear-gradient(135deg, ${card.color}20, ${card.color}40)`,
                border: `1px solid ${card.color}30`,
                borderRadius: 3,
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ color: card.color, mb: 2 }}>
                  {card.icon}
                </Box>
                <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                  {card.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MonthlySummary;
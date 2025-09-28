import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Grid
} from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import MonthlySummary from './components/MonthlySummary';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32',
    },
    secondary: {
      main: '#FF6B35',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
  const [expenses, setExpenses] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense,
      date: new Date(expense.date).toLocaleDateString()
    };
    setExpenses([...expenses, newExpense]);
    showSnackbar('Expense added successfully!');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    showSnackbar('Expense deleted successfully!');
  };

  const showSnackbar = (message) => {
    setSnackbar({ open: true, message });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <Typography variant="h4" component="h1" sx={{ flexGrow: 1, color: 'white' }}>
              💰 Expense Tracker
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                  Add New Expense
                </Typography>
                <ExpenseForm 
                  onAddExpense={addExpense}
                  snackbar={snackbar}
                  onCloseSnackbar={handleCloseSnackbar}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <MonthlySummary expenses={expenses} />
              </Paper>
              
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2E7D32' }}>
                  Expense History
                </Typography>
                <ExpenseTable expenses={expenses} onDeleteExpense={deleteExpense} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
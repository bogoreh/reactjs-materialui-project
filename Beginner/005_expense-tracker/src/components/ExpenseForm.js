import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  Box,
  Grid
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const ExpenseForm = ({ onAddExpense, snackbar, onCloseSnackbar }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [errors, setErrors] = useState({});

  const categories = [
    'Food & Dining',
    'Transportation',
    'Shopping',
    'Entertainment',
    'Bills & Utilities',
    'Healthcare',
    'Travel',
    'Education',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.amount || formData.amount <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddExpense({
        ...formData,
        amount: parseFloat(formData.amount)
      });
      
      setFormData({
        description: '',
        amount: '',
        category: '',
        date: new Date().toISOString().split('T')[0]
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            variant="outlined"
            size="small"
            sx={{ 
              backgroundColor: 'white',
              borderRadius: 1
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            error={!!errors.amount}
            helperText={errors.amount}
            variant="outlined"
            size="small"
            sx={{ 
              backgroundColor: 'white',
              borderRadius: 1
            }}
            InputProps={{
              startAdornment: <span style={{ marginRight: '8px' }}>$</span>,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl 
            fullWidth 
            variant="outlined" 
            size="small"
            error={!!errors.category}
            sx={{ 
              backgroundColor: 'white',
              borderRadius: 1
            }}
          >
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              label="Category"
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {errors.category && (
            <span style={{ color: '#f44336', fontSize: '0.75rem', marginLeft: '14px' }}>
              {errors.category}
            </span>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            error={!!errors.date}
            helperText={errors.date}
            variant="outlined"
            size="small"
            InputLabelProps={{ shrink: true }}
            sx={{ 
              backgroundColor: 'white',
              borderRadius: 1
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            startIcon={<AddIcon />}
            sx={{
              mt: 1,
              background: 'linear-gradient(45deg, #FF6B35, #FF8E53)',
              '&:hover': {
                background: 'linear-gradient(45deg, #E55A2B, #FF7B42)',
              },
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            Add Expense
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={onCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={onCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ExpenseForm;
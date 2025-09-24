import React, { useState } from 'react';
import { TextField, IconButton, Box, InputAdornment } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton 
                type="submit" 
                color="primary" 
                edge="end"
                disabled={!text.trim()}
              >
                <Add />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default AddTodo;
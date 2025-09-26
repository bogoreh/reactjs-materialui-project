import React, { useState } from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton type="submit">
              <Search />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
import React from 'react';
import { Paper } from '@mui/material';

const CustomCard = ({ children, elevation = 1, ...props }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        p: 3,
        borderRadius: 2,
        ...props.sx
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default CustomCard;
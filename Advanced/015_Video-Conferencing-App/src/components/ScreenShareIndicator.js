import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { ScreenShare, Stop } from '@mui/icons-material';

const ScreenShareIndicator = ({ isScreenSharing, onStopSharing }) => {
  if (!isScreenSharing) return null;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
      }}
    >
      <Chip
        icon={<ScreenShare />}
        label="You are sharing your screen"
        onDelete={onStopSharing}
        deleteIcon={<Stop />}
        color="primary"
        variant="filled"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          fontWeight: 600,
          '& .MuiChip-deleteIcon': {
            color: 'white',
          },
        }}
      />
    </Box>
  );
};

export default ScreenShareIndicator;
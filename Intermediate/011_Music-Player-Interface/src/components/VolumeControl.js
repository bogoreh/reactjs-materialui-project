import React from 'react';
import { Box, Slider, IconButton } from '@mui/material';
import { VolumeUp, VolumeDown, VolumeMute } from '@mui/icons-material';

const VolumeControl = ({ volume, onVolumeChange }) => {
  const handleVolumeChange = (event, newValue) => {
    onVolumeChange(newValue);
  };

  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeMute />;
    if (volume < 50) return <VolumeDown />;
    return <VolumeUp />;
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 150 }}>
      <IconButton size="small">
        {getVolumeIcon()}
      </IconButton>
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        aria-labelledby="volume-slider"
        size="small"
        sx={{
          color: '#fff',
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-thumb': {
            width: 12,
            height: 12,
            backgroundColor: '#fff',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0px 0px 0px 8px rgba(255, 255, 255, 0.16)',
            },
          },
        }}
      />
    </Box>
  );
};

export default VolumeControl;
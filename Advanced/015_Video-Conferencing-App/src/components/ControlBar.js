import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { Groups, SignalWifi4Bar } from '@mui/icons-material';
import MediaControls from './MediaControls';

const ControlBar = ({
  participants,
  isAudioEnabled,
  isVideoEnabled,
  isScreenSharing,
  onToggleAudio,
  onToggleVideo,
  onToggleScreenShare,
  onEndCall,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      {/* Meeting Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon={<Groups />}
          label={`${participants.length} participants`}
          variant="outlined"
          color="primary"
        />
        <Chip
          icon={<SignalWifi4Bar />}
          label="Good connection"
          variant="outlined"
          color="success"
        />
      </Box>

      {/* Media Controls */}
      <MediaControls
        isAudioEnabled={isAudioEnabled}
        isVideoEnabled={isVideoEnabled}
        isScreenSharing={isScreenSharing}
        onToggleAudio={onToggleAudio}
        onToggleVideo={onToggleVideo}
        onToggleScreenShare={onToggleScreenShare}
        onEndCall={onEndCall}
      />

      {/* Timestamp */}
      <Typography variant="body2" color="text.secondary">
        01:23:45
      </Typography>
    </Box>
  );
};

export default ControlBar;
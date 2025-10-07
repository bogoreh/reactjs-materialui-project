import React from 'react';
import {
  Box,
  IconButton,
  Tooltip,
  Fab,
} from '@mui/material';
import {
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  ScreenShare,
  StopScreenShare,
  CallEnd,
} from '@mui/icons-material';

const MediaControls = ({
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
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        p: 2,
        backgroundColor: 'background.paper',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      <Tooltip title={isAudioEnabled ? 'Mute microphone' : 'Unmute microphone'}>
        <IconButton
          onClick={onToggleAudio}
          sx={{
            backgroundColor: isAudioEnabled ? 'primary.main' : 'error.main',
            color: 'white',
            '&:hover': {
              backgroundColor: isAudioEnabled ? 'primary.dark' : 'error.dark',
            },
            width: 56,
            height: 56,
          }}
        >
          {isAudioEnabled ? <Mic /> : <MicOff />}
        </IconButton>
      </Tooltip>

      <Tooltip title={isVideoEnabled ? 'Turn off camera' : 'Turn on camera'}>
        <IconButton
          onClick={onToggleVideo}
          sx={{
            backgroundColor: isVideoEnabled ? 'primary.main' : 'error.main',
            color: 'white',
            '&:hover': {
              backgroundColor: isVideoEnabled ? 'primary.dark' : 'error.dark',
            },
            width: 56,
            height: 56,
          }}
        >
          {isVideoEnabled ? <Videocam /> : <VideocamOff />}
        </IconButton>
      </Tooltip>

      <Tooltip title={isScreenSharing ? 'Stop sharing' : 'Share screen'}>
        <IconButton
          onClick={onToggleScreenShare}
          sx={{
            backgroundColor: isScreenSharing ? 'secondary.main' : 'grey.700',
            color: 'white',
            '&:hover': {
              backgroundColor: isScreenSharing ? 'secondary.dark' : 'grey.600',
            },
            width: 56,
            height: 56,
          }}
        >
          {isScreenSharing ? <StopScreenShare /> : <ScreenShare />}
        </IconButton>
      </Tooltip>

      <Tooltip title="End call">
        <Fab
          onClick={onEndCall}
          sx={{
            backgroundColor: 'error.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'error.dark',
            },
            width: 64,
            height: 64,
          }}
        >
          <CallEnd />
        </Fab>
      </Tooltip>
    </Box>
  );
};

export default MediaControls;
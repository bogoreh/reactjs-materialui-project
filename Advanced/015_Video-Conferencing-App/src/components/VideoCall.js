import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import {
  Videocam,
  Lock,
} from '@mui/icons-material';
import { useWebRTC } from '../hooks/useWebRTC';
import ParticipantGrid from './ParticipantGrid';
import ControlBar from './ControlBar';
import ScreenShareIndicator from './ScreenShareIndicator';

const VideoCall = () => {
  const {
    localStream,
    localVideoRef,
    isAudioEnabled,
    isVideoEnabled,
    isScreenSharing,
    participants,
    toggleAudio,
    toggleVideo,
    toggleScreenShare,
  } = useWebRTC();

  const handleEndCall = () => {
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
    }
    window.close();
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar>
          <Videocam sx={{ mr: 2, color: 'primary.main' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Video Conference
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Lock sx={{ fontSize: 16, color: 'success.main' }} />
            <Typography variant="body2" color="text.secondary">
              Secure meeting
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <ScreenShareIndicator 
          isScreenSharing={isScreenSharing}
          onStopSharing={toggleScreenShare}
        />
        
        <ParticipantGrid
          participants={participants}
          localVideoRef={localVideoRef}
        />
      </Box>

      {/* Controls */}
      <ControlBar
        participants={participants}
        isAudioEnabled={isAudioEnabled}
        isVideoEnabled={isVideoEnabled}
        isScreenSharing={isScreenSharing}
        onToggleAudio={toggleAudio}
        onToggleVideo={toggleVideo}
        onToggleScreenShare={toggleScreenShare}
        onEndCall={handleEndCall}
      />
    </Box>
  );
};

export default VideoCall;
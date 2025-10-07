import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Grid,
} from '@mui/material';
import {
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Person,
} from '@mui/icons-material';

const ParticipantVideo = ({ participant, videoRef, isLocal }) => {
  const { name, videoEnabled, audioEnabled } = participant;

  return (
    <Card
      sx={{
        position: 'relative',
        backgroundColor: 'background.paper',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        border: isLocal ? '2px solid' : 'none',
        borderColor: 'primary.main',
        height: '100%',
        minHeight: 200,
      }}
    >
      {/* Video Element */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'grey.900',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {videoEnabled ? (
          <video
            ref={isLocal ? videoRef : null}
            autoPlay
            muted={isLocal}
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 8,
            }}
          />
        ) : (
          <Avatar
            sx={{
              width: 80,
              height: 80,
              backgroundColor: 'primary.main',
              fontSize: '2rem',
            }}
          >
            <Person sx={{ fontSize: '2rem' }} />
          </Avatar>
        )}
      </Box>

      {/* Participant Info Overlay */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            {name} {isLocal && '(You)'}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Chip
              icon={audioEnabled ? <Mic /> : <MicOff />}
              size="small"
              color={audioEnabled ? 'success' : 'error'}
              sx={{ 
                backgroundColor: audioEnabled ? 'success.main' : 'error.main',
                color: 'white',
                '& .MuiChip-icon': { color: 'white' },
              }}
            />
            <Chip
              icon={videoEnabled ? <Videocam /> : <VideocamOff />}
              size="small"
              color={videoEnabled ? 'success' : 'error'}
              sx={{ 
                backgroundColor: videoEnabled ? 'success.main' : 'error.main',
                color: 'white',
                '& .MuiChip-icon': { color: 'white' },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const ParticipantGrid = ({ participants, localVideoRef }) => {
  const getGridSize = (count) => {
    if (count <= 2) return 6;
    if (count <= 4) return 4;
    return 3;
  };

  const gridSize = getGridSize(participants.length);

  return (
    <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        {participants.map((participant) => (
          <Grid 
            item 
            xs={12} 
            md={gridSize} 
            key={participant.id}
            sx={{
              display: 'flex',
              minHeight: 200
            }}
          >
            <ParticipantVideo
              participant={participant}
              videoRef={localVideoRef}
              isLocal={participant.isLocal}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ParticipantGrid;
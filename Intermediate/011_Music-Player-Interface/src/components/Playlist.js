import React from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';

const Playlist = ({ songs, currentSong, isPlaying, onSongSelect }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" sx={{ color: 'white', mb: 2, fontWeight: 'bold' }}>
        Playlist
      </Typography>
      <List sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2 }}>
        {songs.map((song, index) => (
          <ListItem
            key={song.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="play"
                onClick={() => onSongSelect(song)}
                sx={{ color: 'white' }}
              >
                {currentSong?.id === song.id && isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>
            }
            sx={{
              bgcolor: currentSong?.id === song.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              borderLeft: currentSong?.id === song.id ? '3px solid #1DB954' : 'none',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            <ListItemAvatar>
              <img
                src={song.cover}
                alt={song.title}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    fontWeight: currentSong?.id === song.id ? 'bold' : 'normal',
                  }}
                >
                  {song.title}
                </Typography>
              }
              secondary={
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {song.artist}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Playlist;
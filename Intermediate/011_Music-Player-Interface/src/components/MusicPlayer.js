import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Card,
  IconButton,
  Slider,
  Typography,
  LinearProgress,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
} from '@mui/icons-material';
import VolumeControl from './VolumeControl';
import Playlist from './Playlist';

const MusicPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(null);

  const songs = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=center',
      url: '#',
    },
    {
      id: 2,
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&h=150&fit=crop&crop=center',
      url: '#',
    },
    {
      id: 3,
      title: 'Levitating',
      artist: 'Dua Lipa',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&h=150&fit=crop&crop=center',
      url: '#',
    },
    {
      id: 4,
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=150&h=150&fit=crop&crop=center',
      url: '#',
    },
  ];

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (event, newValue) => {
    setCurrentTime(newValue);
    if (audioRef.current) {
      audioRef.current.currentTime = newValue;
    }
  };

  const handleVolumeChange = (newValue) => {
    setVolume(newValue);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const handleSongSelect = (song) => {
    const index = songs.findIndex(s => s.id === song.id);
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: '100%',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: 4,
          p: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Current Song */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            style={{
              width: 200,
              height: 200,
              borderRadius: 12,
              objectFit: 'cover',
              marginBottom: 16,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
          />
          <Typography
            variant="h5"
            sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}
          >
            {currentSong.title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {currentSong.artist}
          </Typography>
        </Box>

        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <Slider
            value={currentTime}
            onChange={handleProgressChange}
            max={duration}
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {formatTime(currentTime)}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {formatTime(duration)}
            </Typography>
          </Box>
        </Box>

        {/* Controls */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <IconButton sx={{ color: 'white' }}>
            <Shuffle />
          </IconButton>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ color: 'white' }} onClick={playPrevious}>
              <SkipPrevious sx={{ fontSize: 32 }} />
            </IconButton>
            <IconButton
              sx={{
                color: 'white',
                bgcolor: '#1DB954',
                '&:hover': { bgcolor: '#1ed760' },
                width: 60,
                height: 60,
              }}
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause sx={{ fontSize: 32 }} />
              ) : (
                <PlayArrow sx={{ fontSize: 32 }} />
              )}
            </IconButton>
            <IconButton sx={{ color: 'white' }} onClick={playNext}>
              <SkipNext sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>

          <IconButton sx={{ color: 'white' }}>
            <Repeat />
          </IconButton>
        </Box>

        {/* Volume Control */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
        </Box>

        {/* Playlist */}
        <Playlist
          songs={songs}
          currentSong={currentSong}
          isPlaying={isPlaying}
          onSongSelect={handleSongSelect}
        />

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={currentSong.url}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
          onEnded={playNext}
        />
      </Card>
    </Box>
  );
};

export default MusicPlayer;
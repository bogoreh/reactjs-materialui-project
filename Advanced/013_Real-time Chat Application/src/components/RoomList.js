import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import {
  People,
  Add,
  Chat
} from '@mui/icons-material';

const RoomList = ({ rooms, currentRoom, onJoinRoom, onCreateRoom }) => {
  const [newRoomName, setNewRoomName] = useState('');

  const handleCreateRoom = () => {
    if (newRoomName.trim() && !rooms.includes(newRoomName.trim())) {
      onCreateRoom(newRoomName.trim());
      setNewRoomName('');
    }
  };

  return (
    <Paper elevation={3} sx={{ height: '100%', minWidth: 250 }}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <People sx={{ mr: 1 }} />
          Chat Rooms
        </Typography>
        
        {/* Create Room */}
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            size="small"
            label="New Room"
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCreateRoom()}
            sx={{ mb: 1 }}
          />
          <Button
            fullWidth
            variant="contained"
            startIcon={<Add />}
            onClick={handleCreateRoom}
            disabled={!newRoomName.trim()}
          >
            Create Room
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Room List */}
        <List sx={{ p: 0 }}>
          {rooms.map((room) => (
            <ListItem
              key={room}
              button
              selected={room === currentRoom}
              onClick={() => onJoinRoom(room)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: 'inherit' }}>
                <Chat fontSize="small" />
              </ListItemIcon>
              <ListItemText 
                primary={room} 
                primaryTypographyProps={{ fontSize: '14px', fontWeight: room === currentRoom ? 600 : 400 }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default RoomList;
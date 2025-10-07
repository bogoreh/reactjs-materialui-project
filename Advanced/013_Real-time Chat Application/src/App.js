import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import RoomList from './components/RoomList';
import ChatRoom from './components/ChatRoom';
import { useWebSocket } from './hooks/useWebSocket';
import { useChat } from './hooks/useChat';
import { readFileAsDataURL, getFileType } from './utils/fileUtils';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { currentRoom, user, setUser, rooms, joinRoom, createRoom } = useChat();
  const {
    isConnected,
    messages,
    typingUsers,
    sendMessage,
    sendTypingStart,
    sendTypingStop
  } = useWebSocket('ws://localhost:8080'); // Replace with your WebSocket server

  // Filter messages for current room
  const roomMessages = messages.filter(msg => msg.room === currentRoom);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setUser(username.trim());
      setIsLoggedIn(true);
    }
  };

  const handleFileUpload = async (file, room, sender) => {
    try {
      const fileUrl = await readFileAsDataURL(file);
      const fileType = getFileType(file);
      
      sendMessage({
        type: 'file_uploaded',
        fileName: file.name,
        fileUrl,
        fileType,
        sender,
        room,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
              <Typography component="h1" variant="h4" align="center" gutterBottom color="primary">
                Real-Time Chat
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 3 }}>
                Join the conversation with your username
              </Typography>
              
              <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={!username.trim()}
                >
                  Join Chat
                </Button>
              </Box>
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Connection Status */}
        {!isConnected && (
          <Alert severity="warning" sx={{ borderRadius: 0 }}>
            Disconnected from server. Attempting to reconnect...
          </Alert>
        )}

        <Container maxWidth="xl" sx={{ flex: 1, py: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Real-Time Chat
          </Typography>
          
          <Grid container spacing={2} sx={{ height: 'calc(100vh - 120px)' }}>
            {/* Sidebar - Room List */}
            <Grid item xs={12} md={3}>
              <RoomList
                rooms={rooms}
                currentRoom={currentRoom}
                onJoinRoom={joinRoom}
                onCreateRoom={createRoom}
              />
            </Grid>

            {/* Main Chat Area */}
            <Grid item xs={12} md={9}>
              <ChatRoom
                room={currentRoom}
                user={user}
                messages={roomMessages}
                typingUsers={typingUsers}
                isConnected={isConnected}
                onSendMessage={sendMessage}
                onTypingStart={sendTypingStart}
                onTypingStop={sendTypingStop}
                onFileUpload={handleFileUpload}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
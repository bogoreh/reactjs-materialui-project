import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Badge
} from '@mui/material';
import {
  Send,
  Wifi,
  WifiOff
} from '@mui/icons-material';
import MessageList from './MessageList';
import TypingIndicator from './TypingIndicator';
import FileUpload from './FileUpload';

const ChatRoom = ({ 
  room, 
  user, 
  messages, 
  typingUsers, 
  isConnected, 
  onSendMessage, 
  onTypingStart, 
  onTypingStop,
  onFileUpload 
}) => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = React.useRef();

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage({
        type: 'message',
        text: message,
        sender: user,
        room: room,
        timestamp: new Date().toISOString()
      });
      setMessage('');
      handleTypingStop();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTypingStart = () => {
    if (!isTyping) {
      setIsTyping(true);
      onTypingStart({
        id: user,
        name: user
      });
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout to stop typing
    typingTimeoutRef.current = setTimeout(() => {
      handleTypingStop();
    }, 3000);
  };

  const handleTypingStop = () => {
    if (isTyping) {
      setIsTyping(false);
      onTypingStop({
        id: user,
        name: user
      });
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    handleTypingStart();
  };

  const handleFileUpload = (file) => {
    onFileUpload(file, room, user);
  };

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      handleTypingStop();
    };
  }, []);

  return (
    <Paper elevation={3} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Chat Header */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {room}
          </Typography>
          <Badge
            color={isConnected ? 'success' : 'error'}
            variant="dot"
            sx={{ mr: 1 }}
          >
            {isConnected ? <Wifi /> : <WifiOff />}
          </Badge>
          <Typography variant="body2" color="text.secondary">
            {user}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Messages */}
      <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <MessageList messages={messages} currentUser={user} />
        
        {/* Typing Indicator */}
        <TypingIndicator typingUsers={typingUsers} />

        {/* Message Input */}
        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
            <FileUpload onFileUpload={handleFileUpload} disabled={!isConnected} />
            
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder={isConnected ? "Type a message..." : "Connecting..."}
              value={message}
              onChange={handleMessageChange}
              onKeyPress={handleKeyPress}
              disabled={!isConnected}
              variant="outlined"
              size="small"
            />
            
            <IconButton 
              color="primary" 
              onClick={handleSendMessage}
              disabled={!message.trim() || !isConnected}
            >
              <Send />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatRoom;
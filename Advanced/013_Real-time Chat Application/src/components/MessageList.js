import React, { useEffect, useRef } from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Chip
} from '@mui/material';
import {
  InsertDriveFile,
  Image as ImageIcon
} from '@mui/icons-material';

const MessageList = ({ messages, currentUser }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const renderFileMessage = (message) => {
    const isImage = message.fileType?.startsWith('image/');
    
    return (
      <Box sx={{ mt: 1 }}>
        <Chip
          icon={isImage ? <ImageIcon /> : <InsertDriveFile />}
          label={message.fileName}
          onClick={() => window.open(message.fileUrl, '_blank')}
          sx={{ cursor: 'pointer' }}
          color="primary"
          variant="outlined"
        />
        {isImage && (
          <Box sx={{ mt: 1 }}>
            <img 
              src={message.fileUrl} 
              alt={message.fileName}
              style={{ 
                maxWidth: '200px', 
                maxHeight: '200px',
                borderRadius: '8px'
              }}
            />
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: message.sender === currentUser ? 'flex-end' : 'flex-start',
            mb: 2
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: message.sender === currentUser ? 'row-reverse' : 'row',
              alignItems: 'flex-start',
              maxWidth: '70%'
            }}
          >
            {/* Avatar */}
            <Avatar
              sx={{ 
                mx: 1,
                width: 32, 
                height: 32,
                bgcolor: message.sender === currentUser ? 'primary.main' : 'secondary.main'
              }}
              src={message.avatar}
            >
              {message.sender?.charAt(0)}
            </Avatar>

            {/* Message Content */}
            <Paper
              elevation={1}
              sx={{
                p: 1.5,
                backgroundColor: message.sender === currentUser ? 'primary.light' : 'background.paper',
                color: message.sender === currentUser ? 'primary.contrastText' : 'text.primary',
                borderRadius: 2,
                maxWidth: '100%'
              }}
            >
              {/* Sender Name */}
              {message.sender !== currentUser && (
                <Typography variant="caption" fontWeight="bold" sx={{ display: 'block', mb: 0.5 }}>
                  {message.sender}
                </Typography>
              )}

              {/* Message Text */}
              {message.text && (
                <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                  {message.text}
                </Typography>
              )}

              {/* File Attachment */}
              {message.fileUrl && renderFileMessage(message)}

              {/* Timestamp */}
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block', 
                  mt: 0.5,
                  opacity: 0.7,
                  textAlign: message.sender === currentUser ? 'right' : 'left'
                }}
              >
                {formatTime(message.timestamp)}
              </Typography>
            </Paper>
          </Box>
        </Box>
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
};

export default MessageList;
import React from 'react';
import { Box, Typography, AvatarGroup, Avatar } from '@mui/material';

const TypingIndicator = ({ typingUsers }) => {
  if (typingUsers.length === 0) return null;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
      <AvatarGroup max={3} sx={{ mr: 1 }}>
        {typingUsers.map((user) => (
          <Avatar 
            key={user.id} 
            sx={{ width: 24, height: 24 }}
            src={user.avatar}
          >
            {user.name?.charAt(0)}
          </Avatar>
        ))}
      </AvatarGroup>
      <Typography variant="body2" color="text.secondary">
        {typingUsers.length === 1 
          ? `${typingUsers[0].name} is typing...`
          : `${typingUsers.length} people are typing...`
        }
      </Typography>
    </Box>
  );
};

export default TypingIndicator;
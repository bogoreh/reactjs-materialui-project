import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const CommentSection = ({ comments }) => {
  return (
    <Box sx={{ px: 2, pb: 2 }}>
      <Divider sx={{ my: 1 }} />
      {comments.map((comment, index) => (
        <Box key={comment.id} sx={{ display: 'flex', mb: 2 }}>
          <Avatar 
            src={comment.user.avatar} 
            sx={{ width: 32, height: 32, mr: 1.5 }}
          />
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mr: 1 }}>
                {comment.user.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {comment.timestamp}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 0.5, lineHeight: 1.4 }}>
              {comment.content}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton size="small">
                {comment.isLiked ? (
                  <Favorite sx={{ fontSize: 16 }} color="error" />
                ) : (
                  <FavoriteBorder sx={{ fontSize: 16 }} />
                )}
              </IconButton>
              <Typography variant="caption" color="text.secondary">
                {comment.likes}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CommentSection;
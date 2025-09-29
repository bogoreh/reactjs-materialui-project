import React from 'react';
import {
  Paper,
  Typography,
  Avatar,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import { CalendarToday, Person, Category } from '@mui/icons-material';

const BlogPost = ({ post }) => {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      {/* Post Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h2" gutterBottom color="primary">
          {post.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Person sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {post.author}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarToday sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {post.date}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Category sx={{ mr: 1, fontSize: 20, color: 'text.secondary' }} />
            <Chip 
              label={post.category} 
              size="small" 
              color="secondary" 
              variant="outlined"
            />
          </Box>
        </Box>
        
        <Divider />
      </Box>

      {/* Featured Image */}
      <Box
        component="img"
        src={post.image}
        alt={post.title}
        sx={{
          width: '100%',
          height: 300,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 3,
        }}
      />

      {/* Post Content */}
      <Typography variant="body1" paragraph>
        {post.content}
      </Typography>

      {/* Author Info */}
      <Paper variant="outlined" sx={{ p: 3, mt: 4, bgcolor: 'background.default' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src={post.authorAvatar}
            sx={{ width: 60, height: 60, mr: 2 }}
          />
          <Box>
            <Typography variant="h6" gutterBottom>
              {post.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.authorBio}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Paper>
  );
};

export default BlogPost;
import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  Box,
  Divider,
} from '@mui/material';
import { TrendingUp, Category, Bookmark } from '@mui/icons-material';

const Sidebar = () => {
  const categories = [
    'Technology',
    'Programming',
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Data Science',
  ];

  const popularPosts = [
    { title: 'Getting Started with React', views: '1.2k' },
    { title: 'Material-UI Best Practices', views: '980' },
    { title: 'Modern CSS Techniques', views: '856' },
    { title: 'JavaScript ES6+ Features', views: '723' },
  ];

  return (
    <Box sx={{ position: 'sticky', top: 20 }}>
      {/* About Card */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Bookmark sx={{ mr: 1 }} />
          About Blog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Welcome to TechBlog! We share the latest insights, tutorials, and best practices 
          in web development, programming, and technology.
        </Typography>
      </Paper>

      {/* Categories */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <Category sx={{ mr: 1 }} />
          Categories
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              color="primary"
              variant="outlined"
              clickable
            />
          ))}
        </Box>
      </Paper>

      {/* Popular Posts */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUp sx={{ mr: 1 }} />
          Popular Posts
        </Typography>
        <List>
          {popularPosts.map((post, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {post.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {post.views} views
                    </Typography>
                  }
                />
              </ListItem>
              {index < popularPosts.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Sidebar;
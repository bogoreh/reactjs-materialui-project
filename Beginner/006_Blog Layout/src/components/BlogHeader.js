import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { Article } from '@mui/icons-material';

const BlogHeader = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar>
          <Article sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            TechBlog
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              Categories
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              About
            </Button>
            <Button color="inherit" sx={{ mx: 1 }}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default BlogHeader;
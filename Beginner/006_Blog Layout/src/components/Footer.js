import React from 'react';
import {
  Box,
  Container,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', mt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              TechBlog
            </Typography>
            
            <Box>
              <IconButton color="inherit">
                <GitHub />
              </IconButton>
              <IconButton color="inherit">
                <Twitter />
              </IconButton>
              <IconButton color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
          
          <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.3)' }} />
          
          <Typography variant="body2" align="center">
            © 2025 TechBlog. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
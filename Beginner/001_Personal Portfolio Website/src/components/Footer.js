import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Code } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Code sx={{ color: 'secondary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              John Doe
            </Typography>
          </Box>
          
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2025 Abdi Bogoreh. All rights reserved.
          </Typography>
          
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Built with React & Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
import React from 'react';
import { Container, Typography, Button, Box, Avatar } from '@mui/material';
import { Download, GitHub, LinkedIn } from '@mui/icons-material';

const Hero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" className="fade-in-up">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            py: 8,
          }}
        >
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Hi, I'm{' '}
              <Box component="span" sx={{ color: 'secondary.main' }}>
                John Doe
              </Box>
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600, mb: 3, opacity: 0.9 }}
            >
              Full Stack Developer
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 4, opacity: 0.8, maxWidth: '500px', mx: { xs: 'auto', md: 0 } }}
            >
              I create beautiful and functional web applications using modern technologies. 
              Passionate about clean code and user experience.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                sx={{
                  backgroundColor: 'secondary.main',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                View Projects
              </Button>
            </Box>
            <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <GitHub sx={{ cursor: 'pointer', '&:hover': { color: 'secondary.main' } }} />
              <LinkedIn sx={{ cursor: 'pointer', '&:hover': { color: 'secondary.main' } }} />
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{
                width: 300,
                height: 300,
                border: '4px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
              src="/api/placeholder/300/300" // Replace with your image
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
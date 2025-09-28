import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Code, Palette, Rocket } from '@mui/icons-material';

const About = () => {
  return (
    <Box id="about" className="section">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        className="gradient-text"
        sx={{ mb: 6, textAlign: 'center' }}
      >
        About Me
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
            My Journey
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            I'm a passionate full-stack developer with 3+ years of experience creating 
            digital solutions. I love turning complex problems into simple, beautiful designs.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            My journey started with a curiosity about how websites work, and it has evolved 
            into a career where I get to build amazing applications every day.
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Code sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Clean Code
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Writing maintainable and scalable code is my priority
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Palette sx={{ fontSize: 40, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    UI/UX Design
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Creating intuitive and beautiful user interfaces
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Rocket sx={{ fontSize: 40, color: 'primary.light', mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Fast Delivery
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Efficient project execution with quality results
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
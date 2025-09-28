import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { Code, Person, Mail } from '@mui/icons-material';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HideOnScroll>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)'
        }}
      >
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Code sx={{ color: 'secondary.main' }} />
            Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button 
              color="inherit" 
              startIcon={<Person />}
              onClick={() => scrollToSection('about')}
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              About
            </Button>
            <Button 
              color="inherit" 
              startIcon={<Code />}
              onClick={() => scrollToSection('skills')}
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              Skills
            </Button>
            <Button 
              color="inherit" 
              startIcon={<Mail />}
              onClick={() => scrollToSection('contact')}
              sx={{ color: 'primary.main', fontWeight: 600 }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
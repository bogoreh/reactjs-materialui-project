import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  AccountCircle,
} from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          ProjectFlow
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
            <AccountCircle />
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
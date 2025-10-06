import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  InputBase,
  Box,
  Avatar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

const Header = ({ onMenuClick }) => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: '#1e293b',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          sx={{ mr: 2, color: '#64748b' }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f8fafc',
              borderRadius: 2,
              px: 2,
              py: 1,
              minWidth: 300,
            }}
          >
            <SearchIcon sx={{ color: '#64748b', mr: 1 }} />
            <InputBase
              placeholder="Search..."
              sx={{ color: '#1e293b' }}
            />
          </Box>

          <IconButton sx={{ color: '#64748b' }}>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{ color: '#64748b' }}>
            <Badge badgeContent={7} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Avatar
            sx={{ width: 40, height: 40 }}
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
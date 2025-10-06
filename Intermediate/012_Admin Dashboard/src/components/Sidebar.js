import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Analytics as AnalyticsIcon,
  Settings as SettingsIcon,
  TrendingUp,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'User Management', icon: <PeopleIcon />, path: '/users' },
  { text: 'Analytics', icon: <AnalyticsIcon />, path: '/analytics' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={onClose}
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          color: 'white',
          border: 'none',
        },
      }}
    >
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <TrendingUp sx={{ fontSize: 32, color: '#6366f1', mr: 1 }} />
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
            AdminPro
          </Typography>
        </Box>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mx: 'auto',
            mb: 2,
            border: '3px solid #6366f1',
          }}
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          John Doe
        </Typography>
        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
          Administrator
        </Typography>
      </Box>

      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: 2,
                backgroundColor: location.pathname === item.path ? '#6366f1' : 'transparent',
                '&:hover': {
                  backgroundColor: location.pathname === item.path ? '#6366f1' : '#334155',
                },
                py: 1.5,
              }}
            >
              <ListItemIcon sx={{ color: location.pathname === item.path ? 'white' : '#94a3b8' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: location.pathname === item.path ? '600' : '400',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
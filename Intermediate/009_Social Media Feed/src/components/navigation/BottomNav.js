// components/navigation/BottomNav.js
import React from 'react';
import { 
  BottomNavigation, 
  BottomNavigationAction,
  Paper
} from '@mui/material';
import {
  Home,
  Person,
  AddBox,
  Notifications,
  Explore
} from '@mui/icons-material';

const BottomNav = ({ currentView, onViewChange }) => {
  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000,
        borderTop: '1px solid',
        borderColor: 'divider'
      }} 
      elevation={3}
    >
      <BottomNavigation
        value={currentView}
        onChange={(event, newValue) => {
          onViewChange(newValue);
        }}
        sx={{
          height: 64,
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '8px 12px'
          }
        }}
      >
        <BottomNavigationAction 
          label="Feed" 
          value="feed" 
          icon={<Home />} 
        />
        <BottomNavigationAction 
          label="Explore" 
          value="explore" 
          icon={<Explore />} 
        />
        <BottomNavigationAction 
          label="Create" 
          value="create" 
          icon={<AddBox />} 
        />
        <BottomNavigationAction 
          label="Notifications" 
          value="notifications" 
          icon={<Notifications />} 
        />
        <BottomNavigationAction 
          label="Profile" 
          value="profile" 
          icon={<Person />} 
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
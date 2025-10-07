import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Chip,
} from '@mui/material';
import {
  Notifications,
  AccountCircle,
  Dashboard,
  Analytics,
} from '@mui/icons-material';
import ReportGenerator from './ReportGenerator';

export default function DashboardHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" elevation={1} sx={{ bgcolor: 'background.paper' }}>
      <Toolbar>
        <Dashboard sx={{ mr: 2, color: 'primary.main' }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 600 }}
        >
          Analytics Pro
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            icon={<Analytics />}
            label="Real-time"
            color="success"
            variant="outlined"
            size="small"
          />
          
          <ReportGenerator />
          
          <IconButton color="inherit" sx={{ color: 'text.secondary' }}>
            <Notifications />
          </IconButton>
          
          <IconButton
            onClick={handleMenu}
            color="inherit"
            sx={{ color: 'text.secondary' }}
          >
            <AccountCircle />
          </IconButton>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  Box,
} from '@mui/material';
import { ShoppingCart, Store } from '@mui/icons-material';

const Header = ({ cartItemsCount, onCartClick }) => {
  return (
    <AppBar 
      position="sticky" 
      elevation={2}
      sx={{ 
        backgroundColor: 'white', 
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Toolbar>
        <Store sx={{ color: 'primary.main', mr: 2 }} />
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            flexGrow: 1, 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2E8B57, #3CB371)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          EcoStyle
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            onClick={onCartClick}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Badge 
              badgeContent={cartItemsCount} 
              color="secondary"
              sx={{
                '& .MuiBadge-badge': {
                  fontSize: '0.7rem',
                  height: '20px',
                  minWidth: '20px',
                }
              }}
            >
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
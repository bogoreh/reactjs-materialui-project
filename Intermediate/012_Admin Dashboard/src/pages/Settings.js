import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import Settings from '../components/Settings';

const SettingsPage = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#1e293b' }}>
        Settings
      </Typography>
      
      <Card className="chart-container">
        <CardContent>
          <Settings />
        </CardContent>
      </Card>
    </Box>
  );
};

export default SettingsPage;
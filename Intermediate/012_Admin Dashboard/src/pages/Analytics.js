import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import AnalyticsChart from '../components/AnalyticsChart';

const Analytics = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#1e293b' }}>
        Analytics Dashboard
      </Typography>
      
      <Card className="chart-container">
        <CardContent>
          <AnalyticsChart />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Analytics;
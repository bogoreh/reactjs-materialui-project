import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material';
import { TreeView, TreeItem } from '@mui/lab';

const AnalyticsChart = () => {
  const metrics = [
    { label: 'Page Views', value: 45.2, change: '+12%' },
    { label: 'Bounce Rate', value: 28.1, change: '-5%' },
    { label: 'Avg. Session', value: 4.2, change: '+8%' },
    { label: 'Conversion', value: 3.7, change: '+15%' },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card className="chart-container">
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Performance Metrics
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {metrics.map((metric, index) => (
                <Box key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {metric.label}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#10b981' }}>
                        {metric.value}%
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: metric.change.startsWith('+') ? '#10b981' : '#ef4444',
                          fontWeight: 'bold',
                        }}
                      >
                        {metric.change}
                      </Typography>
                    </Box>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={metric.value}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card className="chart-container">
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Site Structure
            </Typography>
            <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{ height: 240, flexGrow: 1 }}
            >
              <TreeItem nodeId="1" label="Home">
                <TreeItem nodeId="2" label="Hero Section" />
                <TreeItem nodeId="3" label="Features">
                  <TreeItem nodeId="4" label="Feature 1" />
                  <TreeItem nodeId="5" label="Feature 2" />
                </TreeItem>
              </TreeItem>
              <TreeItem nodeId="6" label="Dashboard">
                <TreeItem nodeId="7" label="Analytics" />
                <TreeItem nodeId="8" label="User Management" />
                <TreeItem nodeId="9" label="Settings" />
              </TreeItem>
              <TreeItem nodeId="10" label="Profile">
                <TreeItem nodeId="11" label="Edit Profile" />
                <TreeItem nodeId="12" label="Security" />
              </TreeItem>
            </TreeView>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className="chart-container">
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Traffic Sources
            </Typography>
            <Grid container spacing={3}>
              {[
                { source: 'Organic Search', value: 45, color: '#6366f1' },
                { source: 'Direct Traffic', value: 25, color: '#10b981' },
                { source: 'Social Media', value: 15, color: '#f59e0b' },
                { source: 'Referral', value: 10, color: '#ec4899' },
                { source: 'Email', value: 5, color: '#8b5cf6' },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={2.4} key={index}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: `conic-gradient(${item.color} ${item.value}%, #e2e8f0 ${item.value}%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 1,
                        position: 'relative',
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {item.value}%
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {item.source}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AnalyticsChart;
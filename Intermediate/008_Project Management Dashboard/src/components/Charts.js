import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  FiberManualRecord as FiberManualRecordIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { chartData } from '../utils/data';

const Charts = () => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#ef4444';
      case 'Medium': return '#f59e0b';
      case 'Low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'To Do': return '#ef4444';
      case 'In Progress': return '#f59e0b';
      case 'Review': return '#3b82f6';
      case 'Done': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <Box sx={{ p: 3, bgcolor: 'background.default' }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        Analytics Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Tasks by Status */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TrendingUpIcon />
              Tasks by Status
            </Typography>
            <List>
              {chartData.tasksByStatus.labels.map((label, index) => (
                <ListItem key={label} divider={index < chartData.tasksByStatus.labels.length - 1}>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ color: getStatusColor(label) }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    secondary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={(chartData.tasksByStatus.data[index] / Math.max(...chartData.tasksByStatus.data)) * 100}
                          sx={{
                            flexGrow: 1,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: getStatusColor(label) + '20',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: getStatusColor(label),
                            },
                          }}
                        />
                        <Typography variant="body2" fontWeight="600">
                          {chartData.tasksByStatus.data[index]} tasks
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Tasks by Priority */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <TrendingUpIcon />
              Tasks by Priority
            </Typography>
            <List>
              {chartData.tasksByPriority.labels.map((label, index) => (
                <ListItem key={label} divider={index < chartData.tasksByPriority.labels.length - 1}>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ color: getPriorityColor(label) }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    secondary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={(chartData.tasksByPriority.data[index] / Math.max(...chartData.tasksByPriority.data)) * 100}
                          sx={{
                            flexGrow: 1,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: getPriorityColor(label) + '20',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: getPriorityColor(label),
                            },
                          }}
                        />
                        <Typography variant="body2" fontWeight="600">
                          {chartData.tasksByPriority.data[index]} tasks
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Statistics Cards */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="700" color="primary.main">
                  {chartData.tasksByStatus.data.reduce((a, b) => a + b, 0)}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Total Tasks
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="700" color="success.main">
                  {chartData.tasksByStatus.data[3]}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Completed
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="700" color="warning.main">
                  {chartData.tasksByStatus.data[1]}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  In Progress
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={1} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="700" color="error.main">
                  {chartData.tasksByPriority.data[0]}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  High Priority
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Charts;
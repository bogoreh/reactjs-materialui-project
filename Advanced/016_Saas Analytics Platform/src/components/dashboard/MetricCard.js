import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

export default function MetricCard({ title, value, change, progress, isPositive = true }) {
  return (
    <Card sx={{ height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom variant="overline">
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 700, mb: 1 }}>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {isPositive ? (
            <TrendingUp sx={{ color: 'success.main', mr: 0.5 }} />
          ) : (
            <TrendingDown sx={{ color: 'error.main', mr: 0.5 }} />
          )}
          <Typography
            variant="body2"
            sx={{ color: isPositive ? 'success.main' : 'error.main' }}
          >
            {change}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 6,
            borderRadius: 3,
            bgcolor: 'grey.200',
            '& .MuiLinearProgress-bar': {
              bgcolor: isPositive ? 'success.main' : 'primary.main',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
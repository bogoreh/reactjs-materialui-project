import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  LinearProgress,
} from '@mui/material';
import {
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  ShoppingCart as CartIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

const StatCard = ({ title, value, change, icon, color }) => (
  <Card sx={{ background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`, color: 'white', borderRadius: 3 }}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography color="inherit" variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            {value}
          </Typography>
          <Typography color="inherit" variant="body2" sx={{ opacity: 0.9 }}>
            {title}
          </Typography>
          <Typography color="inherit" variant="caption" sx={{ opacity: 0.8 }}>
            {change}
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: 'rgba(255,255,255,0.2)', p: 1, borderRadius: 2 }}>
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '12,426', change: '+12% from last month', icon: <PeopleIcon />, color: '#6366f1' },
    { title: 'Revenue', value: '$48,256', change: '+8% from last month', icon: <MoneyIcon />, color: '#10b981' },
    { title: 'Orders', value: '1,428', change: '+23% from last month', icon: <CartIcon />, color: '#f59e0b' },
    { title: 'Growth', value: '32.4%', change: '+5% from last month', icon: <TrendingUpIcon />, color: '#ec4899' },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#1e293b' }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}

        <Grid item xs={12} md={8}>
          <Card className="chart-container">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                Revenue Analytics
              </Typography>
              <Box sx={{ height: 300, background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', borderRadius: 2, p: 2 }}>
                <Typography color="textSecondary" align="center" sx={{ mt: 10 }}>
                  Chart Component - Integrate with Chart.js or similar
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="chart-container">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                Progress Overview
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {['Website Traffic', 'User Conversion', 'Server Load'].map((item, index) => (
                  <Box key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{item}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {65 + index * 15}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={65 + index * 15}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
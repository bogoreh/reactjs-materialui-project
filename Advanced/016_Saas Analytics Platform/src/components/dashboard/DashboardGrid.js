import React from 'react';
import { Grid, Container, Box } from '@mui/material';
import MetricCard from './MetricCard';
import CustomBarChart from '../charts/CustomBarChart';
import CustomLineChart from '../charts/CustomLineChart';
import CustomPieChart from '../charts/CustomPieChart';

export default function DashboardGrid() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Metrics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Total Revenue"
            value="$45,231"
            change="+12%"
            progress={70}
            isPositive={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Active Users"
            value="12,389"
            change="+8%"
            progress={60}
            isPositive={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Conversion Rate"
            value="3.2%"
            change="-2%"
            progress={40}
            isPositive={false}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard
            title="Avg. Session"
            value="4m 12s"
            change="+15%"
            progress={85}
            isPositive={true}
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <CustomBarChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomPieChart />
        </Grid>
        <Grid item xs={12}>
          <CustomLineChart />
        </Grid>
      </Grid>
    </Container>
  );
}
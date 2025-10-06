import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import UserManagement from '../components/UserManagement';

const Users = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#1e293b' }}>
        User Management
      </Typography>
      
      <Card className="chart-container">
        <CardContent>
          <UserManagement />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Users;
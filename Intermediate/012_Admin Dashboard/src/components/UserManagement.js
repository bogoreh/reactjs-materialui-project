import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Block as BlockIcon,
} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

const UserManagement = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleMenuOpen = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
  };

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      role: 'Admin',
      status: 'Active',
      joinDate: '2023-01-15',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      role: 'User',
      status: 'Active',
      joinDate: '2023-02-20',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Mike Chen',
      email: 'mike.chen@example.com',
      role: 'Moderator',
      status: 'Inactive',
      joinDate: '2023-01-08',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'User',
      status: 'Active',
      joinDate: '2023-03-12',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    },
  ];

  const columns = [
    {
      field: 'name',
      headerName: 'User',
      width: 200,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={params.row.avatar} />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {params.row.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {params.row.email}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 130,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'Admin' ? 'primary' : params.value === 'Moderator' ? 'secondary' : 'default'}
        />
      ),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'Active' ? 'success' : 'error'}
          variant="outlined"
        />
      ),
    },
    {
      field: 'joinDate',
      headerName: 'Join Date',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          size="small"
          onClick={(e) => handleMenuOpen(e, params.row)}
        >
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          border: 'none',
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #f1f5f9',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f8fafc',
            borderBottom: '2px solid #e2e8f0',
          },
        }}
      />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <EditIcon sx={{ mr: 1 }} fontSize="small" />
          Edit User
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <BlockIcon sx={{ mr: 1 }} fontSize="small" />
          Block User
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <DeleteIcon sx={{ mr: 1 }} fontSize="small" />
          Delete User
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserManagement;
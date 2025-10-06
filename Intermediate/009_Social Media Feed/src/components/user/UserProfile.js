import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Button,
  Divider,
  Grid,
  Chip
} from '@mui/material';
import { Edit, LocationOn, Link } from '@mui/icons-material';

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <Box sx={{ px: 1 }}>
      <Card sx={{ mb: 2 }}>
        <CardContent sx={{ textAlign: 'center', pt: 4 }}>
          <Avatar
            src={user.avatar}
            sx={{
              width: 96,
              height: 96,
              mx: 'auto',
              mb: 2,
              border: '4px solid',
              borderColor: 'primary.main'
            }}
          />
          
          <Typography variant="h5" fontWeight="700" gutterBottom>
            {user.name}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {user.username}
          </Typography>
          
          <Typography variant="body1" sx={{ my: 2, lineHeight: 1.6 }}>
            {user.bio}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
            <Chip 
              icon={<LocationOn />} 
              label="New York" 
              size="small" 
              variant="outlined" 
            />
            <Chip 
              icon={<Link />} 
              label="johndoe.com" 
              size="small" 
              variant="outlined" 
            />
          </Box>

          <Button 
            variant="outlined" 
            startIcon={<Edit />}
            fullWidth
          >
            Edit Profile
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Grid container spacing={3} textAlign="center">
            <Grid item xs={4}>
              <Typography variant="h6" fontWeight="700">
                245
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Posts
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" fontWeight="700">
                1.2K
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Followers
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" fontWeight="700">
                456
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Following
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;
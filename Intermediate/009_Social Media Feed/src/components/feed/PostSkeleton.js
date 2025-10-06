import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Skeleton,
  Box
} from '@mui/material';

const PostSkeleton = () => {
  return (
    <Card sx={{ mb: 2, mx: 1 }}>
      <CardHeader
        avatar={
          <Skeleton variant="circular" width={44} height={44} />
        }
        title={
          <Skeleton variant="text" width="60%" height={24} />
        }
        subheader={
          <Skeleton variant="text" width="40%" height={20} />
        }
        action={
          <Skeleton variant="circular" width={32} height={32} />
        }
      />
      
      <CardContent>
        <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="90%" height={20} />
        <Skeleton variant="rectangular" width="100%" height={200} sx={{ mt: 2, borderRadius: 2 }} />
      </CardContent>

      <CardActions>
        <Skeleton variant="circular" width={32} height={32} sx={{ mr: 1 }} />
        <Skeleton variant="circular" width={32} height={32} sx={{ mr: 1 }} />
        <Skeleton variant="circular" width={32} height={32} />
      </CardActions>
    </Card>
  );
};

export default PostSkeleton;
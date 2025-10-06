import React, { useState, useEffect, useCallback } from 'react';
import { 
  Box, 
  CircularProgress,
  Fab,
  Zoom,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Add, Refresh } from '@mui/icons-material';
import Post from './Post';
import PostSkeleton from './PostSkeleton';
import Typography from '@mui/material/Typography';
import { generatePosts, generateNewPost } from '../../utils/mockData';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [newPostsAvailable, setNewPostsAvailable] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Load initial posts
  useEffect(() => {
    const loadInitialPosts = async () => {
      setLoading(true);
      setTimeout(() => {
        setPosts(generatePosts(10));
        setLoading(false);
      }, 1000);
    };
    loadInitialPosts();
  }, []);

  // Simulate real-time new posts
  useEffect(() => {
    const interval = setInterval(() => {
      setNewPostsAvailable(true);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const loadMorePosts = useCallback(async () => {
    if (!hasMore || loading) return;
    
    setLoading(true);
    setTimeout(() => {
      const newPosts = generatePosts(5);
      setPosts(prev => [...prev, ...newPosts]);
      setLoading(false);
      
      // Stop loading more after 50 posts for demo
      if (posts.length + newPosts.length >= 50) {
        setHasMore(false);
      }
    }, 1500);
  }, [hasMore, loading, posts.length]);

  const { lastElementRef } = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: loadMorePosts
  });

  const loadNewPosts = () => {
    const newPost = generateNewPost();
    setPosts(prev => [newPost, ...prev]);
    setNewPostsAvailable(false);
  };

  if (loading && posts.length === 0) {
    return (
      <Box sx={{ px: isMobile ? 0 : 1 }}>
        {[...Array(5)].map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      {/* New Posts Indicator */}
      <Zoom in={newPostsAvailable}>
        <Fab
          color="primary"
          size="small"
          onClick={loadNewPosts}
          sx={{
            position: 'fixed',
            top: 80,
            right: 16,
            zIndex: 1000
          }}
        >
          <Refresh />
        </Fab>
      </Zoom>

      {/* Posts List */}
      <Box sx={{ pb: 2 }}>
        {posts.map((post, index) => (
          <Box 
            key={post.id}
            ref={index === posts.length - 1 ? lastElementRef : null}
          >
            <Post post={post} />
          </Box>
        ))}
        
        {/* Loading indicator for more posts */}
        {loading && posts.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
            <CircularProgress size={32} />
          </Box>
        )}
        
        {/* End of feed message */}
        {!hasMore && (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <Typography variant="body2">
              You've reached the end of the feed
            </Typography>
          </Box>
        )}
      </Box>

      {/* Create Post FAB */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 16,
          zIndex: 1000
        }}
      >
        <Add />
      </Fab>
    </Box>
  );
};

export default Feed;
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
  Collapse,
  TextField,
  Button
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  MoreHoriz
} from '@mui/icons-material';
import CommentSection from './CommentSection';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      // Handle comment submission
      setComment('');
    }
  };

  return (
    <Card sx={{ mb: 2, mx: 1, transition: 'all 0.2s', '&:hover': { transform: 'translateY(-2px)' } }}>
      <CardHeader
        avatar={
          <Avatar 
            src={post.user.avatar} 
            sx={{ 
              width: 44, 
              height: 44,
              border: '2px solid',
              borderColor: 'primary.main'
            }}
          >
            {post.user.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1" fontWeight="600">
            {post.user.name}
          </Typography>
        }
        subheader={
          <Typography variant="caption" color="text.secondary">
            {post.timestamp} • {post.location}
          </Typography>
        }
      />
      
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
          {post.content}
        </Typography>
        
        {post.image && (
          <Box
            component="img"
            src={post.image}
            alt="Post"
            sx={{
              width: '100%',
              borderRadius: 2,
              maxHeight: 400,
              objectFit: 'cover'
            }}
          />
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
        <Box>
          <IconButton onClick={handleLike} color={isLiked ? 'error' : 'default'}>
            {isLiked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <Typography variant="caption" sx={{ ml: 0.5 }}>
            {likesCount}
          </Typography>
        </Box>

        <Box>
          <IconButton onClick={() => setShowComments(!showComments)}>
            <ChatBubbleOutline />
          </IconButton>
          <Typography variant="caption" sx={{ ml: 0.5 }}>
            {post.comments.length}
          </Typography>
        </Box>

        <IconButton>
          <Share />
        </IconButton>
      </CardActions>

      {/* Comment Input */}
      <Box sx={{ px: 2, pb: 2 }}>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Write a comment..."
            size="small"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                backgroundColor: 'background.default'
              }
            }}
          />
          {comment && (
            <Button 
              type="submit" 
              variant="text" 
              size="small" 
              sx={{ mt: 1 }}
            >
              Post
            </Button>
          )}
        </form>
      </Box>

      {/* Comments Section */}
      <Collapse in={showComments} timeout="auto">
        <CommentSection comments={post.comments} />
      </Collapse>
    </Card>
  );
};

export default Post;
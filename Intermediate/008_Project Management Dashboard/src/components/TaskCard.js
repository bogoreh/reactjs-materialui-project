import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Avatar,
} from '@mui/material';
import { Draggable } from '@hello-pangea/dnd';

const PriorityChip = ({ priority }) => {
  const getColor = (priority) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  return (
    <Chip
      label={priority}
      color={getColor(priority)}
      size="small"
      variant="outlined"
    />
  );
};

const TaskCard = ({ task, index }) => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            mb: 2,
            cursor: 'pointer',
            transform: snapshot.isDragging ? 'rotate(5deg)' : 'none',
            transition: 'all 0.2s ease',
            '&:hover': {
              boxShadow: 3,
              transform: 'translateY(-2px)',
            },
          }}
          elevation={snapshot.isDragging ? 3 : 1}
        >
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="subtitle1" fontWeight="600" sx={{ flex: 1 }}>
                {task.title}
              </Typography>
              <PriorityChip priority={task.priority} />
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {task.description}
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
              {task.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{ height: 20, fontSize: '0.7rem' }}
                />
              ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Avatar
                sx={{
                  width: 28,
                  height: 28,
                  fontSize: '0.8rem',
                  bgcolor: 'primary.main',
                }}
              >
                {getInitials(task.assignee)}
              </Avatar>
              
              <Typography variant="caption" color="text.secondary">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

export default TaskCard;
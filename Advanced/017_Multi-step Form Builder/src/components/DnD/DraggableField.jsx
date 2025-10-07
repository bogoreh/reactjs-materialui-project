import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Box, Typography, Paper } from '@mui/material';
import { DragIndicator } from '@mui/icons-material';

const DraggableField = ({ field }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `draggable-${field.id}`,
    data: { field }
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      sx={{
        p: 2,
        mb: 1,
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        border: '1px dashed',
        borderColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
        transform: style?.transform,
      }}
      elevation={1}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <DragIndicator color="action" />
        <Typography variant="body2">{field.label}</Typography>
      </Box>
    </Paper>
  );
};

export default DraggableField;
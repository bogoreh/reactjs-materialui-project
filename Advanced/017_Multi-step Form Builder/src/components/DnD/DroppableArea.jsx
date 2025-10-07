import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box, Typography, Paper } from '@mui/material';

const DroppableArea = ({ id, onDrop, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <Paper
      ref={setNodeRef}
      sx={{
        minHeight: 200,
        p: 2,
        backgroundColor: isOver ? 'action.hover' : 'background.default',
        border: '2px dashed',
        borderColor: isOver ? 'primary.main' : 'grey.300',
        transition: 'all 0.2s ease',
      }}
    >
      {React.Children.count(children) === 0 ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography color="text.secondary" variant="body2">
            Drag and drop fields here
          </Typography>
        </Box>
      ) : (
        children
      )}
    </Paper>
  );
};

export default DroppableArea;
import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import { DragDropContext, Droppable } from '@hello-pangea/dnd'; // Updated import
import TaskCard from './TaskCard';
import { initialTasks } from '../utils/data';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const columns = [
    { id: 'todo', title: 'To Do', color: '#ef4444' },
    { id: 'inProgress', title: 'In Progress', color: '#f59e0b' },
    { id: 'review', title: 'Review', color: '#3b82f6' },
    { id: 'done', title: 'Done', color: '#10b981' },
  ];

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceTasks = Array.from(tasks[source.droppableId]);
    const [removed] = sourceTasks.splice(source.index, 1);
    
    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceTasks,
      });
    } else {
      const destTasks = Array.from(tasks[destination.droppableId]);
      destTasks.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceTasks,
        [destination.droppableId]: destTasks,
      });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        Project Board
      </Typography>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {columns.map((column) => (
            <Grid item xs={12} sm={6} md={3} key={column.id}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  minHeight: 600,
                  background: `linear-gradient(180deg, ${column.color}15 0%, transparent 100%)`,
                  border: `1px solid ${column.color}20`,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    pb: 1,
                    borderBottom: `2px solid ${column.color}40`,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: column.color,
                      mr: 1,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                    {column.title}
                  </Typography>
                  <Chip
                    label={tasks[column.id].length}
                    size="small"
                    sx={{
                      backgroundColor: column.color,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                </Box>

                <Droppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{
                        minHeight: 500,
                        transition: 'background-color 0.2s ease',
                        backgroundColor: snapshot.isDraggingOver ? `${column.color}10` : 'transparent',
                        borderRadius: 1,
                        p: 1,
                      }}
                    >
                      {tasks[column.id].map((task, index) => (
                        <TaskCard key={task.id} task={task} index={index} />
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </Box>
  );
};

// Add this Chip component since it's used in the code
const Chip = ({ label, size, sx }) => (
  <Box
    sx={{
      px: 1,
      py: 0.5,
      borderRadius: 4,
      fontSize: size === 'small' ? '0.75rem' : '0.875rem',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      ...sx,
    }}
  >
    {label}
  </Box>
);

export default KanbanBoard;
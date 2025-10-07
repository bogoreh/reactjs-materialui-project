import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip
} from '@mui/material';
import { ExpandMore, Edit } from '@mui/icons-material';
import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

const FormStep = ({ step, fields, children, isExpanded, onExpand }) => {
  const { setNodeRef } = useDroppable({
    id: step.id,
  });

  const handleTitleChange = (event) => {
    // You can implement step title update here
    console.log('Update step title:', event.target.value);
  };

  return (
    <Accordion
      expanded={isExpanded}
      onChange={() => onExpand(step.id)}
      sx={{ mb: 2 }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box display="flex" alignItems="center" gap={2} width="100%">
          <Edit color="action" />
          <Box flex={1}>
            <Typography variant="h6">
              {step.title || `Step ${step.id.split('-')[1]}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {fields.length} field(s)
            </Typography>
          </Box>
          <Chip
            label={`Step ${step.id.split('-')[1]}`}
            color="primary"
            variant="outlined"
          />
        </Box>
      </AccordionSummary>
      
      <AccordionDetails>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Step Title"
            value={step.title}
            onChange={handleTitleChange}
            placeholder="Enter step title..."
          />
        </Box>
        
        <Box ref={setNodeRef}>
          <SortableContext items={fields.map(f => f.id)} strategy={verticalListSortingStrategy}>
            {children}
          </SortableContext>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default FormStep;
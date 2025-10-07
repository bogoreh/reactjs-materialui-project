import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Box,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
  Paper
} from '@mui/material';
import { Delete, DragHandle } from '@mui/icons-material';

const FormField = ({ field, onUpdate, onRemove, stepId }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    onUpdate(stepId, field.id, {
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return (
          <TextField
            fullWidth
            type={field.type}
            label="Field Label"
            placeholder="Enter field label"
            name="label"
            value={field.label || ''}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
        );
      
      case 'select':
        return (
          <TextField
            fullWidth
            select
            label="Field Type"
            name="type"
            value={field.type}
            onChange={handleChange}
            variant="outlined"
            size="small"
          >
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="number">Number</MenuItem>
            <MenuItem value="select">Dropdown</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
          </TextField>
        );
      
      case 'checkbox':
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={field.checked || false}
                onChange={handleChange}
                name="checked"
              />
            }
            label={
              <TextField
                size="small"
                placeholder="Checkbox label"
                name="label"
                value={field.label || ''}
                onChange={handleChange}
                variant="standard"
              />
            }
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      sx={{
        p: 2,
        mb: 2,
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          borderColor: 'primary.main',
        },
      }}
    >
      <Box display="flex" alignItems="flex-start" gap={2}>
        <Box
          {...attributes}
          {...listeners}
          sx={{
            cursor: 'grab',
            display: 'flex',
            alignItems: 'center',
            height: '40px',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
        >
          <DragHandle color="action" />
        </Box>
        
        <Box flex={1}>
          {renderField()}
          
          <Box mt={1} display="flex" gap={1} alignItems="center">
            <TextField
              size="small"
              placeholder="Placeholder text"
              name="placeholder"
              value={field.placeholder || ''}
              onChange={handleChange}
              sx={{ flex: 1 }}
            />
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={field.validation?.required || false}
                  onChange={(e) => onUpdate(stepId, field.id, {
                    validation: { ...field.validation, required: e.target.checked }
                  })}
                  name="required"
                />
              }
              label="Required"
            />
          </Box>
        </Box>
        
        <IconButton
          onClick={() => onRemove(stepId, field.id)}
          color="error"
          size="small"
        >
          <Delete />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default FormField;
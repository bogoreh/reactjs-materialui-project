import React, { useState } from 'react';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  TextField,
  Box
} from '@mui/material';
import { Delete, Edit, Check, Close } from '@mui/icons-material';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <ListItem
      sx={{
        border: 1,
        borderColor: 'grey.300',
        borderRadius: 1,
        mb: 1,
        bgcolor: 'background.paper'
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={onToggle}
        color="primary"
      />
      
      {isEditing ? (
        <TextField
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
          variant="standard"
          autoFocus
        />
      ) : (
        <ListItemText
          primary={todo.text}
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'text.secondary' : 'text.primary'
          }}
        />
      )}
      
      <ListItemSecondaryAction>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {isEditing ? (
            <>
              <IconButton onClick={handleEdit} color="primary" size="small">
                <Check />
              </IconButton>
              <IconButton onClick={handleCancel} color="secondary" size="small">
                <Close />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton 
                onClick={() => setIsEditing(true)} 
                color="primary" 
                size="small"
                disabled={todo.completed}
              >
                <Edit />
              </IconButton>
              <IconButton onClick={onDelete} color="error" size="small">
                <Delete />
              </IconButton>
            </>
          )}
        </Box>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
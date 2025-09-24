import React from 'react';
import { List, Box, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos, onAddTodo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  return (
    <Box>
      <AddTodo onAddTodo={onAddTodo} />
      
      {todos.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ mt: 2, color: 'text.secondary' }}>
          No todos yet. Add one above!
        </Typography>
      ) : (
        <List sx={{ mt: 2 }}>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggleTodo(todo.id)}
              onDelete={() => onDeleteTodo(todo.id)}
              onEdit={(newText) => onEditTodo(todo.id, newText)}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

export default TodoList;
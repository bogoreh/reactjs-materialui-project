import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Rating
} from '@mui/material';

const RecipeCard = ({ recipe, onRecipeClick }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%', 
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
      onClick={() => onRecipeClick(recipe)}
    >
      <CardMedia
        component="img"
        height="200"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {recipe.strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {recipe.strArea} • {recipe.strCategory}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
          {recipe.strTags && recipe.strTags.split(',').slice(0, 3).map((tag, index) => (
            <Chip key={index} label={tag.trim()} size="small" variant="outlined" />
          ))}
        </Box>
        <Rating value={4} readOnly size="small" />
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
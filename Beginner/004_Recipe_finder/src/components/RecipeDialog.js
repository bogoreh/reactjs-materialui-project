import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Chip,
  Button,
  Rating,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid
} from '@mui/material';
import { Close, Restaurant } from '@mui/icons-material';

const RecipeDialog = ({ recipe, open, onClose }) => {
  if (!recipe) return null;

  // Extract ingredients and measurements
  const getIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">{recipe.strMeal}</Typography>
          <Button onClick={onClose} color="inherit">
            <Close />
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <Box mt={2} display="flex" gap={1} flexWrap="wrap">
              <Chip icon={<Restaurant />} label={recipe.strCategory} variant="outlined" />
              <Chip label={recipe.strArea} variant="outlined" />
              <Rating value={4} readOnly />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Ingredients</Typography>
            <List dense>
              {ingredients.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText 
                    primary={`${item.measure} ${item.ingredient}`}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Divider />
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Instructions</Typography>
            <Typography variant="body1" paragraph>
              {recipe.strInstructions}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        {recipe.strYoutube && (
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => window.open(recipe.strYoutube, '_blank')}
          >
            Watch Video
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default RecipeDialog;
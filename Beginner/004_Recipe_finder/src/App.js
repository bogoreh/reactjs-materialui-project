import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Alert,
  AppBar,
  Toolbar
} from '@mui/material';
import { Restaurant } from '@mui/icons-material';
import { debounce } from 'lodash';

import RecipeCard from './components/RecipeCard';
import RecipeDialog from './components/RecipeDialog';
import SearchFilters from './components/SearchFilters';
import { api } from './services/api';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await api.getCategories();
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to fetch categories');
      }
    };
    fetchCategories();
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (query, category) => {
      setLoading(true);
      setError('');
      try {
        let recipesData = [];
        
        if (query.trim()) {
          recipesData = await api.searchRecipes(query);
        } else if (category !== 'All') {
          recipesData = await api.getRecipesByCategory(category);
        } else {
          // Show popular recipes (beef category as example)
          recipesData = await api.getRecipesByCategory('Beef');
        }
        
        setRecipes(recipesData || []);
        if (!recipesData || recipesData.length === 0) {
          setError('No recipes found. Try a different search.');
        }
      } catch (err) {
        setError('Failed to fetch recipes');
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  // Effect for searching recipes
  useEffect(() => {
    debouncedSearch(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory, debouncedSearch]);

  const handleRecipeClick = async (recipe) => {
    setLoading(true);
    try {
      const detailedRecipe = await api.getRecipeDetails(recipe.idMeal);
      setSelectedRecipe(detailedRecipe);
      setDialogOpen(true);
    } catch (err) {
      setError('Failed to load recipe details');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Restaurant sx={{ mr: 2 }} />
          <Typography variant="h6" component="div">
            Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {recipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.idMeal}>
                <RecipeCard recipe={recipe} onRecipeClick={handleRecipeClick} />
              </Grid>
            ))}
          </Grid>
        )}

        {!loading && recipes.length === 0 && !error && (
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mt: 4 }}>
            Search for recipes to get started!
          </Typography>
        )}

        <RecipeDialog
          recipe={selectedRecipe}
          open={dialogOpen}
          onClose={handleCloseDialog}
        />
      </Container>
    </div>
  );
}

export default App;
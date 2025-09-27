const API_KEY = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const api = {
  // Search recipes by name
  searchRecipes: async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error searching recipes:', error);
      return [];
    }
  },

  // Get recipes by category
  getRecipesByCategory: async (category) => {
    try {
      const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching recipes by category:', error);
      return [];
    }
  },

  // Get recipe details by ID
  getRecipeDetails: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return null;
    }
  },

  // Get all categories
  getCategories: async () => {
    try {
      const response = await fetch(`${BASE_URL}/categories.php`);
      const data = await response.json();
      return data.categories || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
};
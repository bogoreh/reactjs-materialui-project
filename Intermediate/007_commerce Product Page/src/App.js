import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import CartDrawer from './components/CartDrawer';
import { Container, Grid, Box } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E8B57',
      light: '#3CB371',
      dark: '#228B22',
    },
    secondary: {
      main: '#FF6B6B',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const initialProduct = {
  id: 1,
  name: 'Premium Cotton T-Shirt',
  price: 29.99,
  description: 'Our premium cotton t-shirt offers exceptional comfort and durability. Made from 100% organic cotton, it\'s perfect for everyday wear.',
  images: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  colors: [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Navy', value: '#001F3F' },
    { name: 'Forest Green', value: '#228B22' },
  ],
};

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(initialProduct.colors[0]);

  const addToCart = (product, size, color, quantity = 1) => {
    const cartItem = {
      id: `${product.id}-${size}-${color.name}`,
      product: product,
      size,
      color,
      quantity,
      price: product.price,
    };

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === cartItem.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, cartItem];
    });
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Header 
          cartItemsCount={getTotalItems()} 
          onCartClick={() => setCartOpen(true)}
        />
        
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <ProductGallery images={initialProduct.images} />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <ProductInfo
                product={initialProduct}
                selectedSize={selectedSize}
                selectedColor={selectedColor}
                onSizeChange={setSelectedSize}
                onColorChange={setSelectedColor}
                onAddToCart={(quantity) => addToCart(initialProduct, selectedSize, selectedColor, quantity)}
              />
            </Grid>
          </Grid>
        </Container>

        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          onUpdateQuantity={updateCartItemQuantity}
          onRemoveItem={removeFromCart}
          totalPrice={getTotalPrice()}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
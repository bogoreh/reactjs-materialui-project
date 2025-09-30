import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Rating,
  Divider,
  Alert,
} from '@mui/material';
import { Add, Remove, Favorite, Share, LocalShipping, AssignmentReturn, Security } from '@mui/icons-material';

const ProductInfo = ({
  product,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const steps = ['Select Options', 'Add to Cart', 'Complete Purchase'];

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto' }}>
      {showAlert && (
        <Alert 
          severity="success" 
          sx={{ mb: 2, animation: 'slideIn 0.3s ease-out' }}
          onClose={() => setShowAlert(false)}
        >
          Product added to cart successfully!
        </Alert>
      )}

      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        {product.name}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Rating value={4.5} precision={0.5} readOnly sx={{ mr: 2 }} />
        <Typography variant="body2" color="text.secondary">
          (128 reviews)
        </Typography>
        <Chip
          label="In Stock"
          color="success"
          size="small"
          sx={{ ml: 2 }}
        />
      </Box>

      <Typography variant="h5" color="primary.main" gutterBottom sx={{ fontWeight: 600 }}>
        ${product.price}
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.6 }}>
        {product.description}
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* Size Selection */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Size
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {product.sizes.map((size) => (
            <Chip
              key={size}
              label={size}
              clickable
              variant={selectedSize === size ? 'filled' : 'outlined'}
              color={selectedSize === size ? 'primary' : 'default'}
              onClick={() => onSizeChange(size)}
              className={`size-option ${selectedSize === size ? 'selected' : ''}`}
              sx={{
                minWidth: 60,
                height: 40,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Color Selection */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Color
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {product.colors.map((color) => (
            <Box
              key={color.name}
              sx={{
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => onColorChange(color)}
            >
              <Box
                className={`color-swatch ${selectedColor.name === color.name ? 'selected' : ''}`}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: color.value,
                  border: color.value === '#FFFFFF' ? '2px solid #e0e0e0' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {selectedColor.name === color.name && (
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                      }}
                    />
                  </Box>
                )}
              </Box>
              <Typography variant="caption" display="block" textAlign="center" sx={{ mt: 1 }}>
                {color.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Quantity Selector */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Quantity
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
              sx={{ minWidth: 48, height: 48 }}
            >
              <Remove />
            </Button>
            <Typography
              sx={{
                width: 60,
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              {quantity}
            </Typography>
            <Button
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= 10}
              sx={{ minWidth: 48, height: 48 }}
            >
              <Add />
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Max 10 items
          </Typography>
        </Box>
      </Box>

      {/* Purchase Steps */}
      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleAddToCart}
          sx={{
            flex: 1,
            minWidth: 200,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: 2,
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Add to Cart
        </Button>
        
        <Button
          variant="outlined"
          size="large"
          startIcon={<Favorite />}
          sx={{
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Wishlist
        </Button>
        
        <Button
          variant="outlined"
          size="large"
          startIcon={<Share />}
          sx={{
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Share
        </Button>
      </Box>

      {/* Features */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <LocalShipping sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="body2" fontWeight={600}>
            Free Shipping
          </Typography>
          <Typography variant="caption" color="text.secondary">
            On orders over $50
          </Typography>
        </Box>
        
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <AssignmentReturn sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="body2" fontWeight={600}>
            Easy Returns
          </Typography>
          <Typography variant="caption" color="text.secondary">
            30-day return policy
          </Typography>
        </Box>
        
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Security sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="body2" fontWeight={600}>
            Secure Payment
          </Typography>
          <Typography variant="caption" color="text.secondary">
            SSL encrypted
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfo;
import React from 'react';
import {
  SwipeableDrawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { Close, Add, Remove, Delete } from '@mui/icons-material';

const CartDrawer = ({ open, onClose, cart, onUpdateQuantity, onRemoveItem, totalPrice }) => {
  const steps = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: 500 },
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            Shopping Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        {/* Checkout Steps */}
        <Box sx={{ mb: 3 }}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Cart Items */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {cart.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Your cart is empty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Add some products to get started
              </Typography>
            </Box>
          ) : (
            cart.map((item) => (
              <Box
                key={item.id}
                className="cart-item"
                sx={{
                  display: 'flex',
                  gap: 2,
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}
                />
                
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    {item.product.name}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Size: {item.size}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Color: {item.color.name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                      
                      <Typography sx={{ minWidth: 30, textAlign: 'center', fontWeight: 600 }}>
                        {item.quantity}
                      </Typography>
                      
                      <IconButton
                        size="small"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                      >
                        <Add fontSize="small" />
                      </IconButton>
                    </Box>

                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>

                    <IconButton
                      size="small"
                      onClick={() => onRemoveItem(item.id)}
                      color="error"
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Box>

        {/* Footer */}
        {cart.length > 0 && (
          <Box sx={{ mt: 'auto', pt: 2 }}>
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Total:
              </Typography>
              <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }}>
                ${totalPrice.toFixed(2)}
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Proceed to Checkout
            </Button>

            <Button
              variant="outlined"
              fullWidth
              onClick={onClose}
              sx={{
                py: 1.5,
                borderRadius: 2,
              }}
            >
              Continue Shopping
            </Button>
          </Box>
        )}
      </Box>
    </SwipeableDrawer>
  );
};

export default CartDrawer;
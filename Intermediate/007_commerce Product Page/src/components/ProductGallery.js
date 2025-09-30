import React, { useState } from 'react';
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
} from '@mui/material';
import { ZoomIn, ZoomOut, Close, NavigateBefore, NavigateNext } from '@mui/icons-material';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [open, setOpen] = useState(false);

  const handleOpen = (index) => {
    setSelectedImage(index);
    setOpen(true);
    setZoom(1);
  };

  const handleClose = () => {
    setOpen(false);
    setZoom(1);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setZoom(1);
  };

  return (
    <Box>
      {/* Main Image */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
          mb: 2,
          cursor: 'zoom-in',
        }}
        onClick={() => handleOpen(0)}
      >
        <img
          src={images[0]}
          alt="Main product"
          style={{
            width: '100%',
            height: '500px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
          className="product-image"
        />
      </Box>

      {/* Thumbnail Gallery */}
      <ImageList cols={4} gap={8} sx={{ m: 0 }}>
        {images.map((image, index) => (
          <ImageListItem key={index} sx={{ borderRadius: 1, overflow: 'hidden' }}>
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: '100%',
                height: '80px',
                objectFit: 'cover',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              className="product-image"
              onClick={() => handleOpen(index)}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal for enlarged view */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Box sx={{ position: 'relative', outline: 'none' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <Close />
          </IconButton>

          <IconButton
            onClick={prevImage}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <NavigateBefore />
          </IconButton>

          <IconButton
            onClick={nextImage}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <NavigateNext />
          </IconButton>

          <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)' }}>
            <IconButton
              onClick={() => setZoom(Math.min(zoom + 0.25, 3))}
              sx={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                mr: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <ZoomIn />
            </IconButton>
            <IconButton
              onClick={() => setZoom(Math.max(zoom - 0.25, 1))}
              sx={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                },
              }}
            >
              <ZoomOut />
            </IconButton>
          </Box>

          <img
            src={images[selectedImage]}
            alt={`Enlarged view ${selectedImage + 1}`}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              transform: `scale(${zoom})`,
              transition: 'transform 0.3s ease',
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductGallery;
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  CheckCircle,
  Wifi,
  AcUnit,
  LocalBar,
  FitnessCenter,
  Pool
} from '@mui/icons-material';

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    description: "Comfortable room with essential amenities",
    price: 129,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    amenities: ["Free WiFi", "Air Conditioning", "TV"],
    capacity: 2
  },
  {
    id: 2,
    name: "Deluxe Room",
    description: "Spacious room with premium features",
    price: 199,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Ocean View"],
    capacity: 3
  },
  {
    id: 3,
    name: "Executive Suite",
    description: "Luxurious suite with separate living area",
    price: 299,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Ocean View", "Jacuzzi", "Private Balcony"],
    capacity: 4
  }
];

const RoomSelection = ({ bookingData, updateBookingData }) => {
  const getAmenityIcon = (amenity) => {
    const icons = {
      'Free WiFi': <Wifi />,
      'Air Conditioning': <AcUnit />,
      'Mini Bar': <LocalBar />,
      'Pool Access': <Pool />,
      'Gym Access': <FitnessCenter />
    };
    return icons[amenity] || <CheckCircle />;
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom color="primary">
        Choose Your Room
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Select from our luxurious room options
      </Typography>

      <Grid container spacing={3}>
        {rooms.map((room) => (
          <Grid item xs={12} key={room.id}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                border: bookingData.selectedRoom?.id === room.id ? '2px solid' : '1px solid',
                borderColor: bookingData.selectedRoom?.id === room.id ? 'primary.main' : 'divider'
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: 300 },
                  height: { xs: 200, md: 'auto' }
                }}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" component="div">
                        {room.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {room.description}
                      </Typography>
                    </Box>
                    <Typography variant="h5" color="primary">
                      ${room.price}
                      <Typography variant="body2" component="span" color="text.secondary">
                        /night
                      </Typography>
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={`Up to ${room.capacity} guests`} 
                      size="small" 
                      variant="outlined" 
                      sx={{ mr: 1 }}
                    />
                  </Box>

                  <List dense>
                    {room.amenities.map((amenity, index) => (
                      <ListItem key={index} sx={{ py: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          {getAmenityIcon(amenity)}
                        </ListItemIcon>
                        <ListItemText primary={amenity} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant={bookingData.selectedRoom?.id === room.id ? "contained" : "outlined"}
                    fullWidth
                    onClick={() => updateBookingData({ selectedRoom: room })}
                  >
                    {bookingData.selectedRoom?.id === room.id ? "Selected" : "Select Room"}
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoomSelection;
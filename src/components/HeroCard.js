import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const HeroCard = () => {
  return (
    <Card sx={{ maxWidth: 345, p: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1493020258366-be3ead1b3027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        alt="green iguana"
        sx={{ borderRadius: 1 }}
      />
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 0,
          pt: 3,
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="primary.main">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </Box>
        <IconButton sx={{ border: '1px solid #ccc' }}>
          <AddIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default HeroCard;

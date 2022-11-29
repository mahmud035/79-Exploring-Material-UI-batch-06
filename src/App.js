import { Avatar, Button, Rating, Typography } from '@mui/material';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';
import TextField from '@mui/material/TextField';

function App() {
  const [rating, setRating] = useState(2);
  console.log(rating);

  return (
    <div className="app">
      <div
        style={{
          background: '#f7f7f7',
          width: '400px',
          height: '400px',
          borderRadius: '1rem',
          padding: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            sx={{ height: 80, width: 80 }}
          />
          <Typography variant="h4" noWrap gutterBottom>
            John Doe
          </Typography>
        </div>
        <br />
        <Button variant="contained" color="secondary">
          contained
        </Button>
        &nbsp;
        <InstagramIcon fontSize="large" color="success" />
        <IconButton aria-label="delete">
          <DeleteIcon fontSize="large" color="error" />
        </IconButton>
        &nbsp;
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          sx={{
            color: 'steelBlue',
          }}
        />
        &nbsp;
        <br /> <br />
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
      </div>
    </div>
  );
}

export default App;

import {
  Avatar,
  Button,
  createTheme,
  Paper,
  Rating,
  Switch,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import HeroCard from './components/HeroCard';

function App() {
  const [rating, setRating] = useState(2);
  const [darkMode, setDarkMode] = useState(false);
  // console.log(rating);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ff0000',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffff00',
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Switch onClick={() => setDarkMode(!darkMode)} />
      <div className="app">
        {/* <div
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
        <Button variant="contained" color="secondary"></Button>
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
        <br /> <br />
        <Button
          variant="contained"
          sx={{
            border: '2px solid red',
            backgroundColor: 'green',
            p: 2,
            width: {
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              xl: 500,
            },
          }}
        >
          Submit
        </Button>
        <br /> <br />

      </div> */}

        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            background: 'lightgray',
            display: 'grid',
            // justifyContent: 'center',
            // alignItems: 'center',
            placeItems: 'center',
          }}
        >
          <HeroCard></HeroCard>

          <Paper sx={{ width: '100px', height: '100px' }}></Paper>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

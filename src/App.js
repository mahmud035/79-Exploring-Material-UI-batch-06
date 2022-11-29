import { Avatar, Button, Typography } from '@mui/material';
import './App.css';

function App() {
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
        <Button variant="contained" fullWidth color="secondary">
          contained
        </Button>
      </div>
    </div>
  );
}

export default App;

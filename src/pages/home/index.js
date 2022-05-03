import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Grid,
  Paper,
  Fab,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  const mock = [
    { id: 1, name: 'Lista 1' },
    { id: 2, name: 'Lista 2' },
    { id: 3, name: 'Lista 3' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
    { id: 4, name: 'Lista 4' },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            GO GROCERY
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 9 }}>
        <Grid item xs={12}>
          <Typography sx={{ my: 2 }} variant="h6">
            Minhas listas
          </Typography>
          {mock.map((list) => (
            <Link to={`/list/${list.id}`} key={list.id}>
              <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                {list.name}
              </Paper>
            </Link>
          ))}
        </Grid>
      </Container>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', right: '20px', bottom: '20px' }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

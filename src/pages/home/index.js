import React, { useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, IconButton, Grid, Alert } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useList from '../../hooks/lists';
import api from '../../utils/api.service';
import CreateList from '../../components/CreateList';
import UserList from '../../components/UserList';

export default function Home() {
  const { lists, setLists } = useList();

  useEffect(() => {
    api.fetchUserList().then((response) => setLists(response.data));
  }, []);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {process.env.REACT_APP_APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 9 }}>
        <Grid item xs={12}>
          <Typography sx={{ my: 2 }} variant="h6">
            Minhas listas
          </Typography>
          {lists.length > 0 ? lists.map((list) => <UserList list={list} key={list.id} />) : <Alert severity="info">Ops, você não possui nenhuma lista</Alert>}
        </Grid>
      </Container>

      <CreateList />
    </Box>
  );
}

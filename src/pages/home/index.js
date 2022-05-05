import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Container, IconButton, Grid, Paper, Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import history from '../../utils/history';
import useList from '../../hooks/lists';
import http from '../../utils/http';

export default function Home() {
  const { lists, setLists } = useList();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await http.fetchUserList();
        setLists(response.data);
      } catch (e) {
        console.log('error', e);
      }
    }
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateNewList = () => {
    history.push('/list/edit/1');
  };

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
          {lists.map((list) => (
            <Link to={`/list/${list.id}`} key={list.id}>
              <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                {list.name}
              </Paper>
            </Link>
          ))}
        </Grid>
      </Container>
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', right: '20px', bottom: '20px' }} onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar nova lista</DialogTitle>
        <DialogContent>
          <TextField autoFocus id="name" label="Digite o nome" type="text" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleCreateNewList}>Criar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

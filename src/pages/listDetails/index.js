import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/api.service';
import useListItems from '../../hooks/listItems';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Fab,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
  Container,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SingleItem from '../../components/SingleItem';

export default function ListDetails() {
  const { listId } = useParams();
  const [open, setOpen] = useState(false);
  const { listItems, setListItems } = useListItems();

  useEffect(() => {
    api.fetchList(listId).then((response) => setListItems(response.data));
  }, []);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" component={Link} to="/home">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {listItems.name}
          </Typography>
          <IconButton size="large" edge="end" color="inherit" onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
          <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">Deseja deletar esta lista?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">Esta ação não pode ser desfeita, deseja continuar?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Não</Button>
              <Button onClick={handleClose} autoFocus>
                Sim
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>

      <List sx={{ mt: 8, width: '100%' }} component="nav">
        {listItems.hasOwnProperty('list_items') && listItems.list_items.length > 0 ? (
          listItems.list_items.map((item) => <SingleItem item={item} key={item.id} />)
        ) : (
          <Container>
            <Alert severity="info">Ops, você não possui nenhum item</Alert>
          </Container>
        )}
      </List>
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', right: '20px', bottom: '20px' }} component={Link} to={`/list/edit/${listId}`}>
        <EditIcon />
      </Fab>
    </Box>
  );
}

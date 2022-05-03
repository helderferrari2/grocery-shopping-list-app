import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Fab,
  List,
  ListItem,
  ListItemText,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListDetails() {
  const mock = {
    name: 'Lista 1',
    list_items: [
      {
        id: 1,
        name: 'Arroz',
        checked: true,
        quantity: 1,
        price: 10.5,
      },
      {
        id: 2,
        name: 'Feijao',
        checked: false,
        quantity: 3,
        price: 1899.99,
      },
      {
        id: 3,
        name: 'Geladeira',
        checked: false,
        quantity: 5,
        price: 999.5,
      },
    ],
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/home"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {mock.name}
          </Typography>
          <IconButton size="large" edge="end" color="inherit" onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Deseja deletar esta lista?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Esta ação não pode ser desfeita, deseja continuar?
              </DialogContentText>
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

      <List sx={{ mt: 8, width: '100%' }} component="nav" aria-label="mailbox folders">
        {mock.list_items.map((list) => (
          <>
            <ListItem key={list.id}>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={list.checked} />} label={list.name} />
              </FormGroup>
              <ListItemText secondary={list.quantity} align="right" />
              <ListItemText secondary={list.price} align="right" sx={{ maxWidth: '100px' }} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', right: '20px', bottom: '20px' }}
        component={Link}
        to="/list/edit/list_id"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton, List, ListItem, Divider } from '@mui/material';

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SearchItem from '../../components/SearchItem';

export default function ListEdit() {


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
        name: 'Bigorna',
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

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" component={Link} to="/list/1">
            <ArrowBackIcon />
          </IconButton>

          <SearchItem />

          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <KeyboardVoiceIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* User list */}
      <List sx={{ mt: 8, width: '100%' }} component="nav" aria-label="mailbox folders">
        {mock.list_items.map((list) => (
          <>
            <ListItem key={list.id}>
              <Typography variant="p">{list.name}</Typography>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <IconButton color="primary">
                  <RemoveCircleSharpIcon />
                </IconButton>
                <Typography variant="h6">1</Typography>
                <IconButton color="primary">
                  <AddCircleSharpIcon />
                </IconButton>
              </Box>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
}

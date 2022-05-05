import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton, List, ListItem, Divider } from '@mui/material';

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function ListEdit() {
  const mockItems = [
    { id: 10, name: 'Fogao' },
    { id: 11, name: 'Skate' },
    { id: 12, name: 'Monitor' },
    { id: 13, name: 'Danone' },
    { id: 14, name: 'Racao' },
    { id: 15, name: 'Danete' },
  ];

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

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Digite um item" inputProps={{ 'aria-label': 'search' }} />
          </Search>

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

        {/* Items that not exists in lists */}
        {mockItems.map((list) => (
          <>
            <ListItem key={list.id} sx={{ background: '#f3f3f3' }}>
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

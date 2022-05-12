import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/api.service';
import useListItems from '../../hooks/listItems';

import { AppBar, Box, Toolbar, Typography, IconButton, Fab, List, Alert, Container } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import SingleItem from '../../components/SingleItem';

export default function ListDetails() {
  const { listId } = useParams();
  const { listItems, setListItems } = useListItems();

  const [checkedItems, setCheckedItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    api.fetchList(listId).then((response) => setListItems(response.data));
  }, [listId, setListItems]);


  useEffect(() => {
    if(listItems.hasOwnProperty('list_items')) {
      setCheckedItems(listItems.list_items.reduce((counter, obj) => obj.checked ? counter += 1 : counter, 0));
      setTotalItems(listItems.list_items.length);
    }
  }, [listItems]);

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
          <Typography variant="h6">
            {checkedItems} / {totalItems}
          </Typography>
        </Toolbar>
      </AppBar>

      <List sx={{ mt: 8, width: '100%' }} component="nav">
        {listItems.hasOwnProperty('list_items') && listItems.list_items.length > 0 ? (
          listItems.list_items.map((item) => <SingleItem item={item} key={item.id} />)
        ) : (
          <Container sx={{mt: 2}}>
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

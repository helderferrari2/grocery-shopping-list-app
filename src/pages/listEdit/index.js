import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/api.service';
import useListItems from '../../hooks/listItems';
import SearchItem from '../../components/SearchItem';
import EditSingleItem from '../../components/EditSingleItem';
import { AppBar, Box, Toolbar, IconButton, List, Alert, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

export default function ListEdit() {
  const { listId } = useParams();
  const { listItems, setListItems } = useListItems();

  useEffect(() => {
    api.fetchList(listId).then((response) => setListItems(response.data));
  }, []);

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

      <List sx={{ mt: 8, width: '100%' }} component="nav">
        {listItems.hasOwnProperty('list_items') && listItems.list_items.length > 0 ? (
          listItems.list_items.map((item) => <EditSingleItem key={item.id} item={item} />)
        ) : (
          <Container>
            <Alert severity="info">Ops, você não possui nenhum item</Alert>
          </Container>
        )}
      </List>
    </Box>
  );
}

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../utils/api.service';
import useListItems from '../../hooks/listItems';
import SearchItem from '../../components/SearchItem';
import Speech from '../../components/Speech';
import { AppBar, Box, Toolbar, IconButton, List, Alert, Container, Skeleton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SingleItem from '../../components/SingleItem';

export default function ListEdit() {
  const { listId } = useParams();
  const { listItems, setListItems } = useListItems();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    api
      .fetchList(listId)
      .then((response) => setListItems(response.data))
      .finally(() => setLoading(false));
  }, [listId, setListItems]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" component={Link} to={`/list/details/${listId}`}>
            <ArrowBackIcon />
          </IconButton>
          <SearchItem />
          <Speech />
        </Toolbar>
      </AppBar>

      <List sx={{ mt: 8, width: '100%' }} component="nav">
        {loading ? (
          <>
            <Skeleton variant="rectangular" height={60} sx={{ m: 1 }} />
            <Skeleton variant="rectangular" height={60} sx={{ m: 1 }} />
            <Skeleton variant="rectangular" height={60} sx={{ m: 1 }} />
          </>
        ) : (
          listItems.hasOwnProperty('list_items') &&
          listItems.list_items.length > 0 &&
          listItems.list_items.map((item) => <SingleItem item={item} key={item.id} isEdit />)
        )}
      </List>
    </Box>
  );
}

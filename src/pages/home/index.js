import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Grid, Avatar, Skeleton } from '@mui/material';
import useList from '../../hooks/lists';
import api from '../../utils/api.service';
import CreateList from '../../components/CreateList';
import SingleList from '../../components/SingleList';
import Logo from '../../assets/images/logo.png';

export default function Home() {
  const { lists, setLists } = useList();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    api
      .fetchUserList()
      .then((response) => setLists(response.data))
      .finally(() => setLoading(false));
  }, [setLists, setLoading]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar sx={{ width: 56, height: 56 }} src={Logo}></Avatar>
          <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
            {process.env.REACT_APP_APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 10 }}>
        <Grid item xs={12}>
          {loading ? (
            <>
              <Skeleton variant="rectangular" height={88} />
              <Skeleton variant="rectangular" height={88} sx={{ my: 3 }} />
              <Skeleton variant="rectangular" height={88} />
            </>
          ) : (
            lists.length > 0 && lists.map((list) => <SingleList list={list} key={list.id} />)
          )}
        </Grid>
      </Container>
      <CreateList />
    </Box>
  );
}

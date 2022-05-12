import React from 'react';
import { Link } from 'react-router-dom';
import useLists from '../../hooks/lists';
import { Paper, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SingleList({ list }) {
  const { handleDeleteList } = useLists();

  const handleDeleteUserList = async (event, listId) => {
    event.preventDefault();
    await handleDeleteList(listId);
  };

  return (
    <Paper elevation={2} sx={{ mb: 3, borderTop: '4px solid #7267EF', '&:hover': { backgroundColor: '#f6f6f6' } }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ p: 3 }}>
        <Grid item xs={10} component={Link} to={`/list/details/${list.id}`}>
          {list.name}
        </Grid>
        <Grid item xs={2} container direction="row" justifyContent="flex-end" alignItems="center">
          <IconButton onClick={(event) => handleDeleteUserList(event, list.id)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}

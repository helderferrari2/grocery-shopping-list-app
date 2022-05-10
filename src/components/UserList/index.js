import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';

export default function UserList({ list }) {
  return (
    <Link to={`/list/details/${list.id}`} >
      <Paper elevation={2} sx={{ p: 3, mb: 3, '&:hover': { backgroundColor: '#f6f6f6' }}}>
        {list.name}
      </Paper>
    </Link>
  );
}

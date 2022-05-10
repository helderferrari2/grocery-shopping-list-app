import React from 'react';
import { Typography, IconButton } from '@mui/material';

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';

export default function Counter() {
  return (
    <>
      <IconButton color="primary">
        <RemoveCircleSharpIcon />
      </IconButton>
      <Typography variant="h6">1</Typography>
      <IconButton color="primary">
        <AddCircleSharpIcon />
      </IconButton>
    </>
  );
}

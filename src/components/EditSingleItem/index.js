import React from 'react';
import useListItems from '../../hooks/listItems';
import { Box, Typography, IconButton, ListItem, Divider} from '@mui/material';

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';

export default function EditSingleItem({ item, isEdit = false }) {
  const { handleUpdateItem, handleDeleteItem } = useListItems();

  const handleDecrease = async (event, item) => {
    event.preventDefault();

    const payload = { ...item, quantity: --item.quantity };

    if (payload.quantity <= 0) {
      await handleDeleteItem(payload.id);
      return;
    }

    await handleUpdateItem(payload);
  };

  const handleIncrease = async (event, item) => {
    event.preventDefault();
    const payload = { ...item, quantity: ++item.quantity };
    await handleUpdateItem(payload);
  };

  return (
    <>
      <ListItem key={item.id}>
        <Typography variant="p" sx={{ width: '100%' }}>
          {item.name || ''}
        </Typography>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton color="primary" onClick={(event) => handleDecrease(event, item)}>
            <RemoveCircleSharpIcon />
          </IconButton>
          <Typography variant="h6">{item.quantity || 0}</Typography>
          <IconButton color="primary" onClick={(event) => handleIncrease(event, item)}>
            <AddCircleSharpIcon />
          </IconButton>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
}

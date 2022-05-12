import React from 'react';
import useListItems from '../../hooks/listItems';
import { Typography, IconButton, Divider, ListItem, Box } from '@mui/material';

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';

export default function SingleItem({ item, isEdit = false }) {
  const { handleUpdateItem, handleDeleteItem } = useListItems();

  const handleDecrease = async (e, item) => {
    e.preventDefault();

    const payload = { ...item, quantity: --item.quantity };

    if (payload.quantity <= 0) {
      await handleDeleteItem(payload.id);
      return;
    }

    await handleUpdateItem(payload);
  };

  const handleIncrease = async (e, item) => {
    e.preventDefault();
    const payload = { ...item, quantity: ++item.quantity };
    await handleUpdateItem(payload);
  };

  const toggleChecked = async (e, item) => {
    e.preventDefault();
    const payload = { ...item, checked: !item.checked };
    await handleUpdateItem(payload);
  };

  return (
    <>
      <ListItem>
        {isEdit ? (
          <Typography variant="h6" sx={{ width: '100%' }}>
            {item.name}
          </Typography>
        ) : (
          <Typography
            variant="h6"
            onClick={(e) => toggleChecked(e, item)}
            sx={{ textDecoration: item.checked ? 'line-through' : 'none', cursor: 'pointer', width: '100%' }}
          >
            {item.name}
          </Typography>
        )}

        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton color="primary" onClick={(e) => handleDecrease(e, item)}>
            <RemoveCircleSharpIcon />
          </IconButton>
          <Typography variant="h6">{item.quantity || 0}</Typography>
          <IconButton color="primary" onClick={(e) => handleIncrease(e, item)}>
            <AddCircleSharpIcon />
          </IconButton>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
}

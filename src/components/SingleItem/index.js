import React, { useState } from 'react';
import useListItems from '../../hooks/listItems';
import { Typography, IconButton, Divider, Box } from '@mui/material';

import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import CurrencyInput from 'react-currency-input-field';

export default function SingleItem({ item, isEdit = false }) {
  const { handleUpdateItem, handleDeleteItem } = useListItems();

  const [price, setPrice] = useState(item.price);

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
    await handleUpdateItem(payload, true);
  };

  const handlePrice = async (newPrice) => {
    setPrice(newPrice);
    const payload = { ...item, price: newPrice };
    await handleUpdateItem(payload);
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', flex: '1' }}>
        <Box sx={{ flexGrow: '1' }}>
          {isEdit ? (
            <Typography variant="h6">{item.name}</Typography>
          ) : (
            <Typography variant="h6" onClick={(e) => toggleChecked(e, item)} sx={{ textDecoration: item.checked ? 'line-through' : 'none', cursor: 'pointer' }}>
              {item.name}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
          <IconButton color="primary" onClick={(e) => handleDecrease(e, item)}>
            <RemoveCircleSharpIcon />
          </IconButton>
          <Typography variant="h6">{item.quantity || 0}</Typography>
          <IconButton color="primary" onClick={(e) => handleIncrease(e, item)}>
            <AddCircleSharpIcon />
          </IconButton>
        </Box>
        <Box>
          <CurrencyInput
            defaultValue={price || 0}
            decimalsLimit={2}
            fixedDecimalLength={2}
            onValueChange={(value) => handlePrice(value)}
            style={{ border: 'none', fontSize: '20px', maxWidth: '80px' }}
            prefix="R$ "
          />
        </Box>
      </Box>
      <Divider />
    </>
  );
}

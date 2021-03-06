import React, { useState } from 'react';
import useListItems from '../../hooks/listItems';
import { Typography, IconButton, Divider, Box } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SingleItem({ item, isEdit = false }) {
  const { handleUpdateItem, handleDeleteItem } = useListItems();

  const [price, setPrice] = useState(item.price);
  const isMobile = useMediaQuery('(max-width:600px)');

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
    if (newPrice > 999) {
      return;
    }

    setPrice(newPrice);
    const payload = { ...item, price: newPrice };
    await handleUpdateItem(payload);
  };

  const itemTextStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '150px',
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px', flex: '1' }}>
        <Box sx={{ flexGrow: '1' }}>
          {isEdit ? (
            <Typography variant="h6" sx={isMobile ? itemTextStyle : {}}>
              {item.name}
            </Typography>
          ) : (
            <Typography
              variant="h6"
              onClick={(e) => toggleChecked(e, item)}
              sx={{
                textDecoration: item.checked ? 'line-through' : 'none',
                cursor: 'pointer',
                ...(isMobile && { ...itemTextStyle }),
              }}
            >
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
          <span style={{marginRight: 5}}>R$</span>
          <input
            type="number"
            defaultValue={Math.trunc(price) || 0}
            onChange={(e) => handlePrice(e.target.value)}
            style={{border: 'none',  fontSize: '20px', maxWidth: '40px'}}
            inputMode="numeric"
          />
        </Box>
      </Box>
      <Divider />
    </>
  );
}

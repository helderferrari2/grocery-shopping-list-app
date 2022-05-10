import React from 'react';
import { ListItem, ListItemText, Divider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function SingleItem({ item }) {
  return (
    <>
      <ListItem key={item.id}>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={item.checked || false} />} label={item.name || ''} />
        </FormGroup>
        <ListItemText secondary={item.quantity || ''} align="right" />
        <ListItemText secondary={item.price || ''} align="right" sx={{ maxWidth: '100px' }} />
      </ListItem>
      <Divider />
    </>
  );
}

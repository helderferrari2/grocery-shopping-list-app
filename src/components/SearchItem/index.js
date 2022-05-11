import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/items';
import api from '../../utils/api.service';
import { Autocomplete, TextField } from '@mui/material';
import useListItems from '../../hooks/listItems';

export default function SearchItem() {
  const { listId } = useParams();
  const { items, setItems } = useItems();
  const { handleNewItem } = useListItems();

  const handleSelected = async (value) => {
    if (value === null || listId === null) {
      return;
    }

    const payload = {
      list_id: listId,
      name: value.name ?? value,
      category: value.category ?? 'diversos',
    };

    await handleNewItem(payload);
  };

  useEffect(() => {
    api.fetchItems().then((response) => setItems(response.data));
  }, []);

  return (
    <Autocomplete
      freeSolo
      options={items}
      getOptionLabel={(option) => option.name || ''}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} placeholder="Digite o item" variant="filled"/>}
      onChange={(event, value) => handleSelected(value)}
    />
  );
}

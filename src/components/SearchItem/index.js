import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/items';
import api from '../../utils/api.service';
import { Autocomplete, TextField } from '@mui/material';
import useListItems from '../../hooks/listItems';

export default function SearchItem() {
  const { listId } = useParams();
  const { items, setItems } = useItems();
  const { itemAlreadyExists, handleNewItem } = useListItems();

  useEffect(() => {
    api.fetchItems().then((response) => setItems(response.data));
  }, [setItems]);

  const handleSelected = async (e, value) => {
    e.preventDefault()
    if (value === null || listId === null) {
      return;
    }

    const payload = {
      list_id: listId,
      name: value.name ?? value,
      category: value.category ?? 'diversos',
    };

    if (itemAlreadyExists(payload.name)) {
      return;
    }

    await handleNewItem(payload);
  };

  return (
    <Autocomplete
      freeSolo
      options={items}
      getOptionLabel={(option) => option.name || ''}
      sx={{ width: '100%'}}
      renderInput={(params) => <TextField {...params} placeholder="Digite o item" variant="filled"/>}
      onChange={(e, value) => handleSelected(e, value)}
    />
  );
}

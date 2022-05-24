import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/items';
import api from '../../utils/api.service';
import { Autocomplete, TextField } from '@mui/material';
import useListItems from '../../hooks/listItems';

export default function SearchItem() {
  const { listId } = useParams();
  const { items, setItems } = useItems();
  const { itemAlreadyExists, handleNewItem } = useListItems();
  const [item, setItem] = useState({});

  useEffect(() => {
    api.fetchItems().then((response) => setItems(response.data));
  }, [setItems]);

  const handleSelected = async (e, value) => {
    e.preventDefault();
    if (value === null || listId === null) {
      setItem({});
      return;
    }

    const payload = {
      list_id: listId,
      name: value.name ?? value,
      category: value.category ?? 'diversos',
    };

    setItem({});

    if (itemAlreadyExists(payload.name)) {
      return;
    }

    await handleNewItem(payload);
  };

  return (
    <Autocomplete
      freeSolo
      autoSelect
      options={items}
      getOptionLabel={(option) => option.name || ''}
      sx={{ width: '100%', '& input::placeholder': { fontSize: '1.1rem', color: 'white' } }}
      renderInput={(params) => <TextField {...params} placeholder="Digite um produto" variant="filled" sx={{ 'input' : {color: 'white'}}}/>}
      onChange={(e, value) => handleSelected(e, value)}
      value={item}
    />
  );
}

import React, { useEffect } from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
import useItems from '../../hooks/items';
import api from '../../utils/api.service';
import { Autocomplete, TextField } from '@mui/material';

export default function SearchItem() {
  const { items, setItems } = useItems();

  useEffect(() => {
    api.fetchItems().then((response) => setItems(response.data));
  }, []);

  // const Search = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  // }));

  // const SearchIconWrapper = styled('div')(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('md')]: {
  //       width: '20ch',
  //     },
  //   },
  // }));

  return (
    // <Search>
    //   <SearchIconWrapper>
    //     <SearchIcon />
    //   </SearchIconWrapper>
    //   <StyledInputBase placeholder="Digite um item" inputProps={{ 'aria-label': 'search' }} />
    // </Search>
    <Autocomplete
      freeSolo
      options={items.map((item) => item.name)}
      sx={{ width: '100%' }}
      renderInput={(params) => <TextField {...params} placeholder="Digite o item" variant="standard"/>}
    />
  );
}

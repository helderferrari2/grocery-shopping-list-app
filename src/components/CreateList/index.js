import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';
import history from '../../utils/history';
import api from '../../utils/api.service';
import { Fab, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Box } from '@mui/material';

export default function CreateList() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const CreateListSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CreateListSchema) });


  const onSubmit = async (formData) => {
    try {
      const response = await api.storeUserList(formData);
      history.push(`/list/edit/${response.data.id}`);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', right: '20px', bottom: '20px' }} onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar nova lista</DialogTitle>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <DialogContent>
            <TextField
              autoFocus
              variant="standard"
              margin="dense"
              fullWidth
              label="Nome"
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Criar</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

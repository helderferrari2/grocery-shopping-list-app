import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Avatar, Button, TextField, Box, Container, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import history from '../../utils/history';
import { AuthContext } from '../../context/AuthContext';

export default function SignUp() {
  const authContext = useContext(AuthContext);

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória').min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (formData) => {
    try {
      // await authContext.signUp(formData);
      const response = await authContext.signIn(formData);
      console.log(response);
      // history.push('home');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <ShoppingCartCheckoutIcon />
        </Avatar>
        <Typography component="h5">Go Grocery</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ my: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nome"
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="E-mail"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 1 }} size="large">
            Cadastrar
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/register">Já possui uma conta? Entrar</Link>
        </Box>
      </Box>
    </Container>
  );
}

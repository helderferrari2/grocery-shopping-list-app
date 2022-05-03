import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, TextField, Box, Container, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <ShoppingCartCheckoutIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Go Grocery
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ my: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="E-mail" name="email" />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 1 }} size="large">
            Entrar
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/register">Não possui uma conta? Cadastre-se</Link>
        </Box>
      </Box>
    </Container>
  );
}

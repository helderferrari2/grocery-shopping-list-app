import React from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function AuthLayout({children}) {
  return (
    <Container component="main" maxWidth="xs">
    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <ShoppingCartCheckoutIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Go Grocery
      </Typography>
        {children}
    </Box>
  </Container>
  )
}

import React from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';
import Logo from '../../assets/images/logo.png';

export default function AuthLayout({ children }) {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, width: 56, height: 56 }} src={Logo}></Avatar>
        <Typography component="h1" variant="h5">
          {process.env.REACT_APP_APP_NAME || ''}
        </Typography>
        {children}
      </Box>
    </Container>
  );
}

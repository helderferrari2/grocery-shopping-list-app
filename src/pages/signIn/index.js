import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useAuth from '../../hooks/auth';
import { Button, TextField, Box} from '@mui/material';
import AuthLayout from '../_layout/authLayout';

export default function SignIn() {
  const { signIn } = useAuth();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória').min(6),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(SignInSchema) });

  const onSubmit = async (formData) => {
    try {
      await signIn(formData);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <AuthLayout>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ my: 1 }}>
          <TextField margin="normal" fullWidth label="E-mail" {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
          <TextField margin="normal" fullWidth label="Senha" type="password" {...register('password')} error={!!errors.password} helperText={errors.password?.message}/>
          <Button type="submit" fullWidth variant="contained" sx={{ my: 1 }} size="large">
            Entrar
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/register">Não possui uma conta? Cadastre-se</Link>
        </Box>
    </AuthLayout>
  );
}

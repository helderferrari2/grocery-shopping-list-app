import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useAuth from '../../hooks/auth';
import { Button, TextField, Box } from '@mui/material';
import AuthLayout from '../_layout/authLayout';
import history from '../../utils/history'

export default function SignUp() {
  const { signUp } = useAuth();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
    password: Yup.string().required('Senha obrigatória').min(6),
  });

  const { register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(SignupSchema) });

  const onSubmit = async (formData) => {
    try {
      await signUp(formData);
      history.push('login');
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <AuthLayout>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ my: 1 }}>
        <TextField margin="normal" fullWidth label="Nome" {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
        <TextField margin="normal" fullWidth label="E-mail" {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
        <TextField margin="normal" fullWidth label="Senha" type="password" {...register('password')} error={!!errors.password} helperText={errors.password?.message}/>
        <Button type="submit" fullWidth variant="contained" sx={{ my: 1 }} size="large">
          Cadastrar
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/register">Já possui uma conta? Entrar</Link>
      </Box>
    </AuthLayout>
  );
}

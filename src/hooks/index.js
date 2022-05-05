import React from 'react';
import { AuthProvider } from './auth';
import { ListProvider } from './lists';

export default function GlobalProvider({ children }) {
  return (
    <AuthProvider>
      <ListProvider>{children}</ListProvider>
    </AuthProvider>
  );
}

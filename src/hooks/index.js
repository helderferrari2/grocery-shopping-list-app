import React from 'react';
import { AuthProvider } from './auth';
import { ListProvider } from './lists';
import { ItemProvider } from './items';
import { ListItemsProvider } from './listItems';

export default function GlobalProvider({ children }) {
  return (
    <AuthProvider>
      <ListProvider>
        <ItemProvider>
          <ListItemsProvider>{children}</ListItemsProvider>
        </ItemProvider>
      </ListProvider>
    </AuthProvider>
  );
}

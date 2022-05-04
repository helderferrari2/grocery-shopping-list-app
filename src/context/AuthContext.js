import React, { useState, createContext, useCallback } from 'react';
import http from '../utils/http';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const signUp = useCallback(async (payload) => {
    const response = await http.register(payload);
    return response.data;
  }, []);

  const signIn = useCallback(async (payload) => {
    const response = await http.login(payload);
    return response.data;
  }, []);

  return <AuthContext.Provider value={[isLoggedIn, user]}>{children}</AuthContext.Provider>;
}

import React, { useState, createContext, useCallback, useContext } from 'react';
import api from '../utils/api.service';
import history from '../utils/history';
import AuthService from '../utils/auth.service';

/**
 * Create an AuthContext
 */
export const AuthContext = createContext({});

/**
 * Create an AuthProvider
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return AuthService.getToken()
  });

  const signUp = useCallback(async (payload) => {
    const response = await api.register(payload);
    return response.data;
  }, []);

  const signIn = useCallback(async (payload) => {
    const response = await api.login(payload);
    const { user, token } = response.data;

    setUser(user);
    setIsLoggedIn(true);
    AuthService.setToken(token);
    history.push('home');
  }, []);

  const logout = useCallback(() => {
    AuthService.deleteToken();
    history.push('login');
  }, []);

  return <AuthContext.Provider value={{ signIn, signUp, logout, isLoggedIn, user }}>{children}</AuthContext.Provider>;
}

/**
 * Custom hook
 */
export default function useAuth() {
  return useContext(AuthContext);
}

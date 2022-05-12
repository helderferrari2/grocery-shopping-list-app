import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/auth';

export default function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn && isPrivate) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} component={Component} />;
}

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouteMiddleware({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const isLoggedIn = false;

  // Redirect to index
  if (!isLoggedIn && isPrivate) {
    return <Redirect to="/" />;
  }

  // Redirect to home, if user is logged in
  if (isLoggedIn && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} component={Component} />;
}

import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
  const isLoggedIn = true;

  // if (!isLoggedIn && isPrivate) {
  //   return <Redirect to="/login" />;
  // }

  return <Route {...rest} component={Component} />;
}

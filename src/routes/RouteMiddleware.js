import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteMiddleware({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const isLoggedIn = true;

  // if (!isLoggedIn && isPrivate) {
  //   return <Redirect to="/login" />;
  // }

  const Layout = isLoggedIn ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

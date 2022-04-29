import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouteMiddleware';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Home from '../pages/home';
import List from '../pages/list';
import NotFound from '../pages/error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/home" isPrivate component={Home} />
        <Route exact path="/list" isPrivate component={List} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

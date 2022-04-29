import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './RouteWrapper';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Home from '../pages/home';
import List from '../pages/list';
import NotFound from '../pages/error';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" isPrivate component={Home} />
      <Route path="/list" isPrivate component={List} />
      <Route component={NotFound} />
    </Switch>
  );
}

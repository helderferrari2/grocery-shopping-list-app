import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './RouteWrapper';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Home from '../pages/home';
import ListDetails from '../pages/listDetails';
import ListEdit from '../pages/listEdit';
import NotFound from '../pages/error';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" isPrivate component={Home} />
      <Route path="/list/edit/:list_id" isPrivate component={ListEdit} />
      <Route path="/list/:list_id" isPrivate component={ListDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

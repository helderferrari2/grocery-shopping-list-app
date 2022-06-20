import React from 'react';
import { Switch, Router } from 'react-router-dom';
import Route from './RouteWrapper';
import history from '../utils/history';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Home from '../pages/home';
import ListDetails from '../pages/listDetails';
import ListEdit from '../pages/listEdit';
import Logout from '../pages/logout';

export default function Routes() {

  return (
    <Switch>
      <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/logout" component={Logout} />
        <Route path="/home" isPrivate component={Home} />
        <Route path="/list/edit/:listId" isPrivate component={ListEdit} />
        <Route path="/list/details/:listId" isPrivate component={ListDetails} />
      </Router>
    </Switch>
  );
}

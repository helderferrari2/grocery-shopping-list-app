import React, {useEffect} from 'react';
import { Switch, Router } from 'react-router-dom';
import Route from './RouteWrapper';
import history from '../utils/history';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Home from '../pages/home';
import ListDetails from '../pages/listDetails';
import ListEdit from '../pages/listEdit';
import NotFound from '../pages/error';

export default function Routes() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, []);

  return (
    <Switch>
      <Router history={history}>
        <Route exact path="/" component={SignIn} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/home" isPrivate component={Home} />
        <Route path="/list/edit/:listId" isPrivate component={ListEdit} />
        <Route path="/list/details/:listId" isPrivate component={ListDetails} />
        {/* <Route path="*" component={NotFound} /> */}
      </Router>
    </Switch>
  );
}

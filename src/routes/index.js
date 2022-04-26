import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './RouteMiddleware';

import Splash from '../pages/splash';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import Home from '../pages/home';
import List from '../pages/list';
import NotFound from '../pages/error';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Splash} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" isPrivate component={Home} />
      <Route path="/list" isPrivate component={List} />
      <Route component={NotFound} />
    </BrowserRouter>
  );
}

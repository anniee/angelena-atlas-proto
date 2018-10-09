import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Explore from 'routes/Explore';

export default() =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/explore" exact component={Explore} />
  </Switch>

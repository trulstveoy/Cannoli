import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Form, Game, About } from '../containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="form" component={Form} />
    <Route path="game" component={Game} />
    <Route path="about" component={About} />
  </Route>
);

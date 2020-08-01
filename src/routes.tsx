import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import CreateNewVideo from './Pages/CreateNewVideo';
import CreateCategory from './Pages/CreateCategory';
import NotFoundedPage from './Pages/404Page';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/create/video" component={CreateNewVideo} />
      <Route path="/create/category" component={CreateCategory} />
      <Route component={NotFoundedPage} />
    </Switch>
  );
};

export default Router;

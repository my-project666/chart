import React from 'react';
import { Router} from 'dva/router';
import MapRouter from './MapRoute';
import routes from './routes'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <MapRouter routes={routes}></MapRouter>
    </Router>
  );
}

export default RouterConfig;

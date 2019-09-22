import React from 'react';
import { Router } from 'dva/router';
import routes from './routes';
import MapRoute from "../routes/MapRoute";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
         <MapRoute routes={routes}></MapRoute>            
    </Router>
  );
}

export default RouterConfig;
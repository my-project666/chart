import dva from 'dva';
import './index.css';

import RoutView from './routes';
import Login from './models/example'

// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model

app.model(Login);

// 4. Router
app.router(RoutView);



// 4. Router



// 5. Start
app.start('#root');

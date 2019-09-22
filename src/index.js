import dva from 'dva';
import './index.css';
import RoutView from './routes';
import Login from './models/example'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(Login);

// 4. Router
app.router(RoutView);

// 5. Start
app.start('#root');

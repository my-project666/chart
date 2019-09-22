import dva from 'dva';
import './index.css';
// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import RouterConfig from './routes/router'
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');

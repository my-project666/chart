import {Toast} from 'antd-mobile';
import {routerRedux} from 'dva/router';
import {loginApi} from '../services/user';
console.log(loginApi)
export default {

  namespace: 'login',
  state: {
    userName:'',
    passWord:''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({ payload }, { call, put}) {  // eslint-disable-line
      //登录
      console.log(payload)
      const res = yield call(loginApi,payload);
      
      console.log(res);
      yield put({type:'add'})
      console.log('saveTOn','++++++++++')
    },
  },

  reducers: {
    add(state,{payload}) {
      console.log(state,payload);
      console.log('saveTOn')
      return { ...state, payload };
    },
  },

};

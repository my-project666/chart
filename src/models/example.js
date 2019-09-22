
export default {

  namespace: 'login',
  state: {
      
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *login({ payload }, { call, put}) {  // eslint-disable-line
    
      yield put({type:'add'})
      
    },
  },

  reducers: {
     
  },

};
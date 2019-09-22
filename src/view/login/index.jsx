import React, { Component } from 'react'
import {connect} from 'dva';
const mapState=(state)=>{
 
    return state.login;
}
const mapDispath2Props = (dispatch)=>({
       get(payload){
       
           dispatch({
               type:'login/fetch',
               payload
           })
       }
})


@connect(mapState,mapDispath2Props)
 class Login extends Component {
    render() {
        this.props.get({name:'666'})
        return (
            <div>
                   <input type="text"/><br/>
                   <input type="text"/><br/>
                   <button onClick={this.add}>注册</button>
            </div>
        )
    }

    add=()=>{
        this.props.history.push('/main')
    }
}
export default Login;
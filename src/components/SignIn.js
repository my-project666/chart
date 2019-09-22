//登入
import React, { Component } from 'react'
import { connect } from 'dva';
import styles from '../view/IndexPage.css';
import {Input, Button} from 'antd';
import {loginApi} from '../services/user';
console.log(loginApi);
class Signln extends Component {
    state={
        int1:'',
        int2:''
    }
    //登录
    async login(payload){
        const result = await loginApi(payload);
        console.log(result);
        if(result.data.code==1){
            console.log(this.props.history.push('/keyStudent'))
        }
    }
    loginHandle=()=>{
        const username = this.state.int1
        const password = this.state.int2
        this.login({username,password})
    }
    int1=(e)=>{
        console.log(e.target.value)
        this.setState({
            int1:e.target.value
        })
    }
    int2=(e)=>{
        console.log(e.target.value)
        this.setState({
            int2:e.target.value
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="login-form">
                     
                            <Input placeholder="请输入用户名" className={styles.int} onChange={this.int1}/>,
                    
                    
                            <Input type="password" placeholder="请输入密码" className={styles.int} onChange={this.int2}/>,
           
                     
                        <Button type="primary" htmlType="submit" className={styles.login_form_button} onClick={this.loginHandle}>
                            登入
                        </Button>
                  
                </div>
            </div>
        )
    }
}

export default Signln

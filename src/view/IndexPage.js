import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './IndexPage.css';
//登入
import Signln from '../components/SignIn'
//注册
import Register from '../components/register'
import { Tabs,Form} from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

class login extends Component {  
  render() {
    return (
      <div className={styles.box}>
      <div className={styles.box_header}>
        <p className={styles.box_header_p}>重点学生周考成绩录入管理系统</p>
      </div>
      <div className={styles.box_con}>
        <div className={styles.box_con_c}>
          <div className={styles.box_con_h4}>
            <h2>网站工程</h2>
          </div>
          <div className={styles.box_con_login}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="登入" key="1" className={styles.ant_tabs_bar}>
                <Signln history={this.props.history}/>
              </TabPane>
              <TabPane tab="注册" key="2">
                <Register/>
              </TabPane>
            </Tabs>
          </div>
        </div>
        
      </div>
    </div>
    )
  }
}
export default connect()(login);

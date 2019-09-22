import React, { Component } from 'react'
import styles from '../view/IndexPage.css'
class allAchiements extends Component {
    render() {
        return (
            <div className={styles.allAchiements}>
                <div className={styles.allAchiements_top}>
                    <p>
                        XX学生日周考试成绩统计表
                    </p>
                </div>
                <div className={styles.allAchiements_con}>
                    <p>讲师：<span>xxx</span></p>
                    <p>学生：<span>xxx</span></p>
                    <div className={styles.allDiv}>快捷选择其他学生</div>
                </div>
                <div className={styles.allAchiements_pa}>
                    <table border="1" cellpadding="0" cellspacing="0" className={styles.allAchiements_pa_table}>
                        <tr>
                            <td>日期</td>
                            <td>理论</td>
                            <td>技能</td>
                            <td>分析和解决</td>
                            <td>是否周考</td>
                            <td>操作</td>
                        </tr>
                        <tr>
                            <td>11-03-2017</td>
                            <td>89</td>
                            <td>Transfering</td>
                            <td>对方过哈都打哈死的卡迪奥迪等哈搜到都在吃吃饭</td>
                            <td>否</td>
                            <td>
                                <span>编辑</span>、<span>删除</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default allAchiements
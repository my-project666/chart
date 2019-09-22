import React, { Component } from 'react'
import styles from './IndexPage.css'
import ReactEcharts from 'echarts-for-react'

class keyStudent extends Component {
    state={
        flag:false
    }
    addCheng=()=>{
        this.setState({
            flag:true
        })  
    }
    removes=()=>{
        this.setState({
            flag:false
        }) 
    }
    selects=()=>{
        
        this.props.history.push('/allAchievenment')
    }
    render() {
        console.log(this.props)
        const option = {
            title: {
                text: 'XX同学的日周考成绩统计图',
                subtext: '仅供参考'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['技能','理论']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['08-01','08-02','08-03','08-04','08-05','08-06','08-07','08-08','08-09','08-10','08-11','08-12','08-13']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10,20,15,7,5,9,10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'最低气温',
                    type:'line',
                    data:[1,2, 2, 5, 3, 2, 20,10,20,15,7,5,9,10],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        };
        
        return (
            <div className={styles.keyStudent}>
                <div className={styles.keyStudent_top}>
                    <p>
                        重点关注学生考试成绩统计图
                    </p>
                </div>
                <div className={styles.keyStudent_con}>
                    <div className={styles.keyStudent_con_c}>
                        <p>切换班级:</p>
                        <span>1703C</span>
                        <span>1703E</span>
                        <span>1703E</span>
                        <span className={styles.keyStudent_con_c_sp}>创建班级+</span>
                    </div>
                    
                </div>
                <div className={styles.keyStudent_tian}>
                    <label>添加学生+：</label>
                    <input placeholder="输入姓名"/>
                    <input placeholder="未位次数"/>
                    <input placeholder="结对子，帮扶对象"/>
                    <button>添加</button>
                </div>
                <div className={styles.caves}>
                    <ReactEcharts option={option} className={styles.caves_c}></ReactEcharts>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.bottom_p1} onClick={this.addCheng}>添加成绩+</p>
                    <p className={styles.bottom_p}>添加分析和解决方案+</p>
                    <p className={styles.bottom_p3} onClick={this.selects}>查看和编辑该生所有成绩</p>
                </div>
                {
                    !this.state.flag?null:<div className={styles.zhe}>
                    <div className={styles.tanchu}>
                        <div className={styles.tanchu_div}>
                                <p>
                                    <span>
                                        新添成绩——XX同学
                                    </span>
                                </p>
                            </div> 
                            <div className={styles.tanchu_in}>
                                <input placeholder="默认当前日期"/><button>昨天</button>
                            </div>
                            <div className={styles.tanchu_ins}>
                                <label>技能：  </label>
                                <input placeholder="数字" className={styles.tanchu_ins_int}/>
                                <br/>
                                <label>理论：  </label>
                                <input placeholder="0-100之间数字" className={styles.tanchu_ins_int}/>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.buttons_btn1} onClick={this.removes}>取消</button>
                                <button className={styles.buttons_btn2}>确定</button>
                            </div>
                    </div>
                </div>
                }
                
                
            </div>
        )
    }
}

export default keyStudent
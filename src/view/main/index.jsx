import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import styles from './index.scss';
import 'echarts/lib/chart/line'
import { height } from 'window-size';
class Main extends Component {

    render() {
        const option = {
            title: {
                text: 'XX 同学的的日考成绩统计图',
                subtext: "仅供参考",
                fontSize: "12px"

            },
            legend: {
                data: ['技能', '理论']
            },
            tooltip: {
                trigger: 'axis',
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: "one"
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-09', '08-10', '08-11', '08-12', '08-13']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                },

            },
            series: [
                {
                    name: '理论',
                    type: 'line',
                    data: [50, 45, 44, 55, 65, 69, 60, 58, 50, 49, 66, 35],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '技能',
                    type: 'line',
                    data: [21, 25, 34, 25, 78, 49, 55, 58, 64, 59, 22, 35],

                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
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
                                }

                            }]
                        ]
                    }
                }
            ]
        }
        const options= {
            xAxis: {
                type: 'category',
                data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-09', '08-10', '08-11', '08-12', '08-13']
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: "理论",
                    data: [50, 45, 44, 55, 57, 69, 61, 58, 52, 51, 35, 32],
                    type: 'bar',
                    color: "red"
                },
                {
                    name: "技能",
                    data: [21, 25, 34, 25, 62, 49, 44, 58, 50, 59, 22, 35],
                    type: 'bar',
                    color: "yellow"
                }
            ],

            legend: {
                data: ['技能', '理论']
            },
        };

        return (
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <h2 className={styles.title}>重点关注学生考试成绩统计图</h2>
                </header>
                <div className={styles.labels}>
                    <div className={styles.classRoom}>
                        <div className={styles.cont}>
                            <div className={styles.class1}>
                                <div className={styles.left}>
                                    <span>选择班级:</span>
                                </div>
                                <div className={styles.conts}>
                                    <div className={styles.item}>1703D  </div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                    <div className={styles.item}>1704A</div>
                                </div>
                            </div>
                            <div className={styles.class2}>
                                <div className={styles.til}>
                                    名单：
                         </div>
                                <div className={styles.con}>
                                    <p>张三 李四 赵四  (3人)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className={styles.main}>
                        <div className={styles.tops}>
                            <ReactEcharts option={option} className={styles.canvas} style={{ height: "300px" }}></ReactEcharts>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.lef}>
                                 <span>2019-08-30</span>
                                 <p>今日分析解决方案</p>
                                 <a href="#/main">点击查看历史记录></a>
                            </div>
                            <div className={styles.rig}>
                                七彩小虫延着不断生长的树枝飞翔，一圈圈环绕，只见大树被彩虹似的光圈缠绕，发出耀眼的光芒，
                                 一会树枝芽上就绽放了一朵朵雪白透明的花朵 七彩小虫延着不断生长的树枝飞翔，一圈圈环绕，只见大树被彩虹似的光圈缠绕，发出耀眼的光芒，
                                 一会树枝芽上就绽放了
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
export default Main
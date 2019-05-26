import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, WhiteSpace, WingBlank, Tag } from 'antd-mobile';
import { getYuce, getData, WS_HOST } from '../services/example';
import { findIndex } from 'lodash'

class IndexPage extends Component {

    state = {
        yuce: [],
        data: {},
        section: '',
        isCan: false
    }

    componentDidMount() {
        this.state.num = window.localStorage.getItem('num')
        this.feachData();
        this.ws()
        this.autoFetch()
    }

    autoFetch() {
        window.setInterval(() => {
            this.feachData();
        }, 30000)
    }

    ws() {
        // let That = this;
        // var ws = new WebSocket(WS_HOST);
        // // ws.send("hello");
        // ws.onopen = function (event) { };
        // ws.onmessage = function (event) {
        //     console.log(event.data)
        //     if (event && event.data > 0) {
        //         That.setState({ isCan: true })
        //     } else {
        //         That.setState({ isCan: false })
        //     }
        // };
    }

    feachData() {
        getYuce().then(_res => {
            console.log(_res, '_res')
            if (_res && _res.data && _res.data.code == 200) {
                this.setState({
                    yuce: _res.data.data,
                    section: _res.data.section
                })
            }

        })
        getData().then(_res => {
            // console.log(_res, '_res')
            if (_res && _res.data && _res.data.code == 200) {
                this.setState({
                    data: _res.data.data
                })
            }
        })
    }

    render() {
        const { yuce, data, section } = this.state;
        // console.log(data, 'data')
        let content = data.content || []
        let newlyErrorPos = [];
        let newlySuccessPos = []
        content.forEach((v, index) => {
            v.forEach((o, j) => {
                if (o.id == 0 && o.success == false) {
                    // 分析值中，没有把返回位置+1值返回，
                    newlyErrorPos.push(o.prevPos)
                }
                if (o.id == 0 && o.success == true) {
                    // 分析值中，返回成功的
                    newlySuccessPos.push(o.prevPos)
                }
            })
        })
        // console.log(newlyErrorPos, 'newlyErrorPos')
        yuce.forEach(v => {
            if (findIndex(newlyErrorPos, o => o == v.pos) > -1) {
                v.tj = true;
            }
            if (findIndex(newlySuccessPos, o => o == v.pos) > -1) {
                v.btj = true;
            }
        })
        // console.log(section, 'section')
        return (
            <WingBlank>

                <Button style={{ marginBottom: 20 }} onClick={() => { this.setState({ isCan: false }) }} type="primary">知道啦，关闭音乐</Button>

                <Button style={{ marginBottom: 20 }} onClick={this.feachData.bind(this)} type="primary">获取</Button>

                <Tag style={{ marginBottom: 20 }}  >{section}</Tag>

                {this.renderYuce(yuce)}
                {this.renderData(content)}

                {this.state.isCan > 0 && <audio autoPlay src={require("../assets/flumpool - OAOA (Instrumental) - instrumental.mp3")} controls="controls">
                </audio>}

            </WingBlank>
        );
    }

    renderYuce(yuce) {


        if (yuce.length == 0) return <div>本期不推荐哦！</div>
        return yuce.map((v, index) => {
            let style = {};
            if (v.tj == true) {
                style.background = 'red'
            }
            if (v.btj == true) {
                style.background = 'green'
            }
            return <div key={index} style={style} >
                {v.msg}
            </div>
        })
    }


    renderData(data) {
        // console.log(data, 'content')
        let successTotal = 0;
        let errorTotal = 0;
        let listDom = [];
        let total_1 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_2 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_3 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_4 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_5 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_6 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_7 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_8 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_9 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_10 = {
            successTotal: 0,
            errorTotal: 0
        }
        let total_11 = {
            successTotal: 0,
            errorTotal: 0
        }

        // 期数总和
        let _total_1 = {
            successTotal: 0,
            errorTotal: 0
        }
        let _total_2 = {
            successTotal: 0,
            errorTotal: 0
        }
        let _total_3 = {
            successTotal: 0,
            errorTotal: 0
        }
        let _total_4 = {
            successTotal: 0,
            errorTotal: 0
        }
        let _total_5 = {
            successTotal: 0,
            errorTotal: 0
        }

        data.forEach((v, index) => {
            let successT = 0;
            let errorT = 0;
            let __successT = 0;
            let __errorT = 0;
            // console.log(v,'vvvvv')
            v.forEach((o, j) => {
                if (o.id < 1) {
                    // console.log(o,'ooooo')
                    if (o.success == true) {
                        total_1.successTotal++;
                    } else if (o.success == false) {
                        total_1.errorTotal++;
                    }
                }
                if (o.id < 2) {
                    if (o.success == true) {
                        total_2.successTotal++;
                    } else if (o.success == false) {
                        total_2.errorTotal++;
                    }
                }
                if (o.id < 3) {
                    if (o.success == true) {
                        total_3.successTotal++;
                    } else if (o.success == false) {
                        total_3.errorTotal++;
                    }
                }
                if (o.id < 4) {
                    if (o.success == true) {
                        total_4.successTotal++;
                    } else if (o.success == false) {
                        total_4.errorTotal++;
                    }
                }
                if (o.id < 5) {
                    if (o.success == true) {
                        successT++
                        total_5.successTotal++;
                    } else if (o.success == false) {
                        errorT++
                        total_5.errorTotal++;
                    }
                }
                // if (o.id < 6) {
                //     if (o.success == true) {
                //         // successT++
                //         total_6.successTotal++;
                //     } else if (o.success == false) {
                //         // errorT++
                //         total_6.errorTotal++;
                //     }
                // }
                // if (o.id < 7) {
                //     if (o.success == true) {
                //         // successT++
                //         total_7.successTotal++;
                //     } else if (o.success == false) {
                //         errorT++
                //         total_7.errorTotal++;
                //     }
                // }
                // if (o.id < 8) {
                //     if (o.success == true) {
                //         successT++
                //         total_8.successTotal++;
                //     } else if (o.success == false) {
                //         errorT++
                //         total_8.errorTotal++;
                //     }
                // }
                // if (o.id < 9) {
                //     if (o.success == true) {
                //         successT++
                //         total_9.successTotal++;
                //     } else if (o.success == false) {
                //         errorT++
                //         total_9.errorTotal++;
                //     }
                // }
                // if (o.id < 10) {
                //     if (o.success == true) {
                //         successT++
                //         total_10.successTotal++;
                //     } else if (o.success == false) {
                //         errorT++
                //         total_10.errorTotal++;
                //     }
                // }
                // if (o.id < 11) {
                //     if (o.success == true) {
                //         successT++
                //         total_11.successTotal++;
                //     } else if (o.success == false) {
                //         errorT++
                //         total_11.errorTotal++;
                //     }
                // }








                // 期数总和
                if (j < 1) {
                    if (o.success == true) {
                        _total_1.successTotal++;
                    } else if (o.success == false) {
                        _total_1.errorTotal++;
                    }
                }
                if (j < 2) {
                    if (o.success == true) {
                        _total_2.successTotal++;
                    } else if (o.success == false) {
                        _total_2.errorTotal++;
                    }
                }
                if (j < 3) {
                    if (o.success == true) {
                        _total_3.successTotal++;
                    } else if (o.success == false) {
                        _total_3.errorTotal++;
                    }
                }
                if (j < 4) {
                    if (o.success == true) {
                        _total_4.successTotal++;
                    } else if (o.success == false) {
                        _total_4.errorTotal++;
                    }
                }
                if (j < 5) {
                    if (o.success == true) {
                        __successT++;
                        _total_5.successTotal++;
                    } else if (o.success == false) {
                        __errorT++;
                        _total_5.errorTotal++;
                    }
                }

                // if (o.id < 1) {
                //     // console.log(o,'ooooo')
                //     if (o.success == true) {
                //         total_1.successTotal++;
                //     } else if (o.success == false) {
                //         total_1.errorTotal++;
                //     }
                // }

            })
            let itemDom = <div key={index}>
                {
                    v.length > 0 && <span>{v[0].title} <span> {v[0].num}
                        （5次内统计）（<span style={{ color: 'green' }} >{__successT}次</span>，<span style={{ color: 'red' }}>{__errorT}次</span>）
                     </span>最近三期</span>
                }
                {
                    v.length > 0 && <span> 第{v[0].id}期<span style={v[0].success == true ? { color: 'green' } : { color: 'red' }} > {v[0].success == true ? '成功' : '失败'}</span></span>
                }
                {
                    v.length > 1 && <span> 第{v[1].id}期<span style={v[1].success == true ? { color: 'green' } : { color: 'red' }} > {v[1].success == true ? '成功' : '失败'}</span></span>
                }
                {
                    v.length > 2 && <span> 第{v[2].id}期<span style={v[2].success == true ? { color: 'green' } : { color: 'red' }} > {v[1].success == true ? '成功' : '失败'}</span></span>
                }
            </div>
            listDom.push(itemDom)
            // successTotal+=successT;
            // errorTotal+=errorT;
        })

        if (total_1.errorTotal >= 2) {

        }

        return <div style={{ marginTop: 30 }}>

            {/* {_total_5.errorTotal <= 14 && <audio autoPlay src={require("../assets/flumpool - OAOA (Instrumental) - instrumental.mp3")} controls="controls">
            </audio>} */}
            {listDom}
            <div style={{ marginTop: 10 }}>
                总计 (最近1期)
                <span style={{ color: 'green' }}>成功{total_1.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_1.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近2期)
                <span style={{ color: 'green' }}>成功{total_2.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_2.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近3期)
                <span style={{ color: 'green' }}>成功{total_3.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_3.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近4期)
                <span style={{ color: 'green' }}>成功{total_4.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_4.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近5期)
                <span style={{ color: 'green' }}>成功{total_5.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_5.errorTotal}次</span>
            </div>
            {/* <div style={{ marginTop: 10 }}>
                总计 (最近6期)
                <span style={{ color: 'green' }}>成功{total_6.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_6.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近7期)
                <span style={{ color: 'green' }}>成功{total_7.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_7.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近8期)
                <span style={{ color: 'green' }}>成功{total_8.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_8.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近9期)
                <span style={{ color: 'green' }}>成功{total_9.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_9.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近10期)
                <span style={{ color: 'green' }}>成功{total_10.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_10.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (最近11期)
                <span style={{ color: 'green' }}>成功{total_11.successTotal}次</span>，<span style={{ color: 'red' }}>失败{total_11.errorTotal}次</span>
            </div> */}



            {/* <div style={{ marginTop: 30 }}>
                总计 (1期)
                <span style={{ color: 'green' }}>成功{_total_1.successTotal}次</span>，<span style={{ color: 'red' }}>失败{_total_1.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (2期)
                <span style={{ color: 'green' }}>成功{_total_2.successTotal}次</span>，<span style={{ color: 'red' }}>失败{_total_2.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (3期)
                <span style={{ color: 'green' }}>成功{_total_3.successTotal}次</span>，<span style={{ color: 'red' }}>失败{_total_3.errorTotal}次</span>
            </div>
            <div style={{ marginTop: 10 }}>
                总计 (4期)
                <span style={{ color: 'green' }}>成功{_total_4.successTotal}次</span>，<span style={{ color: 'red' }}>失败{_total_4.errorTotal}次</span>
            </div> */}
            <div style={{ marginTop: 30 }}>
                总计 (5期)
                <span style={{ color: 'green' }}>成功{_total_5.successTotal}次</span>，<span style={{ color: 'red' }}>失败{_total_5.errorTotal}次</span>
            </div>
        </div>
    }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

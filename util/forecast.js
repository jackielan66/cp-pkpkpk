/**
 * 预测方法
 */
let init = require('./init')
let _ = require('lodash');
let currentYucePos = []
let UserOrder = require('../model/UserOrder')

function foreCast(data) {
    // return yuce({},data);
    currentYucePos = [];
    return yuce(init(data), data);
}

function yuce(NumberRecord, _res) {
    /**
     * 三期值计算，否则报错
     * return data;预测的结果值
     */
    let data = [];
    let newlyRecord = _res[0].data;
    let hotMap = getHotList(_res)
    NumberRecord.forEach((v, index) => {
        // 规则 1 是不是同一个方向
        let _rule1 = (v[0].pos - v[1].pos > 0 && v[1].pos - v[2].pos > 0) ||
            (v[0].pos - v[1].pos < 0 && v[1].pos - v[2].pos < 0);
        // // 规则 2 前两期是重码的
        // let _rule2 = false;  //(v[0].pos - v[1].pos != 0 && v[1].pos - v[2].pos == 0);
        // // 规则 3 两期两期都是重码的
        // let _rule3 =false;// v[0].pos - v[1].pos != 0 && v[1].pos - v[2].pos == 0 && v[2].pos - v[3].pos != 0 && v[3].pos - v[4].pos == 0;
        // let rule3WillCome = (v[0].pos - v[1].pos == 0 && v[1].pos - v[2].pos != 0 && v[2].pos - v[3].pos == 0);
        // if (rule3WillCome) {
        //     let _obj = {
        //         num: v[0].value,
        //         msg: ` 下一期会出现规则三，请期待吧 `
        //     }
        //     data.push(_obj);
        //     return;
        // }
        if (_rule1) {
            let resultNum = [];
            let beforeNum, afterNum, numPos, nowNum;
            numPos = v[0].pos; // 当前号码最新一期出现的位置
            nowNum = v[0].num;  // 当前号码
            if (numPos == 0) {
                beforeNum = newlyRecord[9].num
            } else {
                beforeNum = newlyRecord[numPos - 1].num;
            }
            if (numPos == 9) {
                afterNum = newlyRecord[0].num
            } else {
                afterNum = newlyRecord[numPos + 1].num
            }
            let arr = [beforeNum, afterNum, nowNum];

            let hotList = [];;
            // resultNum = hotList;
            let originData = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

            if (hotMap[numPos].length > 1) {
                originData = [];
                hotList = _.orderBy(hotMap[numPos], 'count', 'desc')
                // console.log(hotList, 'hotList')
                hotList.forEach(v => {
                    originData.push(v.num)
                })
            }
            // console.log('originData', originData)
            resultNum = _.difference(originData, arr);
            // 抽牌算法
            let copyArr = [],
                n = resultNum.length,
                i;
            copyArr = resultNum;
            // while (n) {
            //     i = Math.floor(Math.random() * resultNum.length);
            //     if (i in resultNum) {
            //         copyArr.push(resultNum[i]);
            //         delete resultNum[i];
            //         n--;
            //     }
            // }
            // 抽牌算法end
            // copyArr.splice(Math.floor(Math.random() * copyArr.length), 1);
            // copyArr.splice(Math.floor(Math.random() * copyArr.length), 1);

            if (copyArr.length > 5) {
                copyArr = copyArr.filter((v, index) => {
                    return index < 5
                })
            }


            let str = `号码${nowNum}， 推荐位置：${numPos + 1}；====> ：${copyArr}`
            let _obj = {
                num: nowNum,
                pos: numPos,
                msg: str,
                qishu: _res[0].section
            }
            data.push(_obj);
            // 当期的位置的位置暴露出去start
            currentYucePos.push(numPos);
            // console.log(currentYucePos,'==currentYucePos 预测')
            // 当期的位置的位置暴露出去end

            // 2019-4-21 新加的保存预测d订单功能 start
            let params = {
                section: _obj.qishu,
                num: nowNum,
                pos: numPos,
                time: Date.now(),
                title:'本期的预测结果'
            }
            let search = {
                section: _obj.qishu,
                num: nowNum,
                pos: numPos,
            }
            console.log('走保存了')
            UserOrder.findOne(search).then(isSaved => {
                console.log('走保存了')
                if (!isSaved) {
                    new UserOrder(Object.assign({}, {
                        order: copyArr,
                    }, params)).save();
                } else {

                }
            })
            // 2019-4-21 新加的保存预测d订单功能 end
        }
    })
    return data;
}

function getcurrentYucePos() {
    return currentYucePos
}


const getHotList = (getHotList, pos) => {
    // 返回的是哪个位置的冷热号
    let initList = [];
    if (Array.isArray(getHotList) && getHotList.length > 0) {
        getHotList.forEach(v => {
            // console.log(v, 'v')
            initList.push(v.data)
        })
    }
    let hotMap = {};
    let returnData = {};
    initList.forEach((v, index) => {
        v.forEach((j, k) => {
            if (!hotMap[j.pos]) {
                hotMap[j.pos] = []
            }
        })
        for (let key in hotMap) {
            hotMap[key].push(v[key].num)
        }
    })

    for (let key in hotMap) {
        if (returnData[key] == null) {
            returnData[key] = [];
        }
        hotMap[key].forEach(v => {
            let obj = _.find(returnData[key], { num: v })
            if (obj) {
                returnData[key].forEach(j => {
                    j.count = j.count + 1
                })
            } else {
                returnData[key].push({
                    num: v,
                    count: 0
                })
            }

        })
    }
    // 返回值计算
    // console.log(returnData, 'returnData')
    return returnData
}


exports.foreCast = foreCast;
exports.getcurrentYucePos = getcurrentYucePos;
// module.exports = {
//     foreCast,
//     currentErrorPos
// };

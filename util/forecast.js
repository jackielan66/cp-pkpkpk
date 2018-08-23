/**
 * 预测方法
 */
let init = require('./init')
let _ = require('lodash');


function foreCast(data) {
    // return yuce({},data);
    return yuce(init(data), data);
}

function yuce(NumberRecord, _res) {
    /**
     * 三期值计算，否则报错
     * return data;预测的结果值
     */
    let data = [];
    let newlyRecord = _res[0].data;
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
            resultNum = _.difference(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], arr);
            // 抽牌算法
            let copyArr = [],
                n = resultNum.length,
                i;
            while (n) {
                i = Math.floor(Math.random() * resultNum.length);
                if (i in resultNum) {
                    copyArr.push(resultNum[i]);
                    delete resultNum[i];
                    n--;
                }
            }
            // 抽牌算法end
            copyArr.splice(Math.floor(Math.random() * copyArr.length), 1);
            copyArr.splice(Math.floor(Math.random() * copyArr.length), 1);

            let str = `号码${nowNum}， 推荐位置：${numPos + 1}；====> ：${copyArr}`
            let _obj = {
                pos: numPos,
                msg: str
            }
            data.push(_obj);
            return;
        }
    })
    return data;
}


module.exports = foreCast;

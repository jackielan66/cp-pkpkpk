/**
 *  数据分析
 * 统计规则中 出现的次数
 * @param {*} res
 */
/**
 * 通用类方法
 */
let init = require('./init')
let _ = require('lodash');
// let currentErrorPos = []; // 上一期最近三个连续的数字位置集合

function analysis(data, num) {
    // currentErrorPos = []; // 走分析其中先把重置
    return fenxiResult(data, init(data, num));
}

function fenxiResult(_res, initData) {
    /**
     * _res 接口返回的原始数据
     */
    // console.log(initData,'initDatainitDatainitData')
    let returnData = [];

    initData.forEach(item => {
        /**
         * item 是每个号码的位置以及最近位置以及周边三期位置集合
         */
        console.log(item, 'itemitem')
        let _result = [] // 整理这个号码某期 有规则一的号码集合
        for (let i = 0; i < item.length - 2; i++) {
            let _rule1 = ruleType__1(item, i);
            if (_rule1) {
                let _obj = {};
                _obj.title = `第${i}期有预测`
                _obj.id = i; // 后台返回的list的index
                _obj.num = item[i].num;
                _obj.pos = item[i].pos;
                _obj.map = item[i].map;
                _obj.time = item[i].time;
                _obj.section = item[i].section;
                _result.push(_obj)
            }
        }
        let detailData = [];
        _result.forEach((v, index) => {
            // 最新一期预测值，不做统计计算，因为统计必须要有结果，所以要有上一期的值

            // 返回有预测值后，是否出现附近3个值的集合
            // v.id 后台返回的list的index
            if (v.id == 0) return;
            let _obj = {}; // 预测后返回预测是否正确结果集
            let notExpectData = v.map; // 不希望出现的数字
            let kaijiangRecord = _res[v.id - 1].data; //当前预测后开奖记录值
            let kaijiangValue = kaijiangRecord[v.pos].num; // 预测后开奖值
            let _repeat = notExpectData.some(o => {
                // console.log(o,'oo')
                // console.log(kaijiangValue,'kaijiangValue')
                return o == kaijiangValue
            })
            _obj.id = v.id - 1;
            _obj.num = v.num;
            _obj.section = v.section;
            _obj.time = v.time;
            // _obj.title = v.title;
            _obj.prevPos = v.pos; // 前一期位置
            if (_repeat) {
                _obj.success = false;
                _obj.msg = `去它的本期重复了`;
            } else {
                _obj.success = true;
                _obj.msg = `本期没有出现附件三个哦`;
            }
            // 新加的整理错误数据的集合 start
            if (_obj.id == 0 && _obj.success == false) {
                // currentErrorPos.push(_obj.prevPos)
            }
            // 新加的整理错误数据的集合 end
            detailData.push(_obj)
        })
        returnData.push(detailData)
    })

    return returnData;
}

function ruleType__1(item, i) {
    if (item[i] && item[i + 1] && item[i + 2]) {
        return (item[i].pos - item[i + 1].pos > 0 && item[i + 1].pos - item[i + 2].pos > 0)
            || (item[i].pos - item[i + 1].pos < 0 && item[i + 1].pos - item[i + 2].pos < 0);
    }
}



function getCurrentErrorPos() {
    // return currentErrorPos
}

module.exports = {
    analysis,
    getCurrentErrorPos,
};
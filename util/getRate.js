/**
 * 预测方法
 */
let init = require('./init')
let _ = require('lodash');
let currentYucePos = []
let UserOrder = require('../model/UserOrder');
let Pk10 = require('../model/Pk10');
let moment = require('moment');

// 获取前一期的中奖率
const getRate = (rateDate,_d) => {
    // _d 最新一期开奖记录值
    const _data = rateDate || [];
    // const _d = 
    console.log(_d,'开奖列表ing')
    let obj = {};
    _data.forEach(v => {
        if (obj[v.section]) {

        }
    });
    return rateDate;
}

exports.getRate = getRate;

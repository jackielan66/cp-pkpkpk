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
const getRate = (rateDate, _d) => {
    // _d 最新一期开奖记录值
    const _data = rateDate || [];
    // const _d = 
    // console.log(_d,'开奖列表ing')
    let Res = [];
    _data.forEach(v => {
        let obj = {};

        // 预测的是第几期
        let index = _.findIndex(_d, { section: v.section });

        // 预测一期加一期，表示最新一期开奖值
        let newWin = {};
        if (index > 0) {
            newWin = _d[index - 1]; // 预测那一期开奖结果
            // console.log(newWin, '开奖号码');
            const lotteryNumber = (_.find(newWin.data,{pos:v.pos})).num; // 开奖号码
            // console.log(lotteryNumber, '开奖号码');
            const betNumber = v.order; // 下注号码
            // console.log(betNumber, '下注号码');
            obj.betNumber = betNumber;
            obj.lotteryNumber = lotteryNumber;
            obj.section = newWin.section;
            Res.push(obj);
        };



        // if(newWin[v.pos]){

        // }
        // console.log(newWin[v.pos], '开奖号码');

    });
    return Res;
}

exports.getRate = getRate;

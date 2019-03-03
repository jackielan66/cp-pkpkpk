/*
* api 暴露借口
* */
let express = require('express');
let _ = require('lodash');
let moment = require('moment');
let init = require('../util/init')
let router = express.Router();
let Pk10 = require('../model/Pk10')
let forecast = require('../util/forecast').foreCast;

let analysis = require('../util/analysis').analysis;
router.get('/test', (req, res, next) => {
    let startTime = moment(req.query.startTime || Date.now()).startOf('day');
    let endTime = moment(req.query.endTime || req.query.startTime).endOf('day'); // req.query.endTime || Date.now();
    let time = {
        $gte: startTime,
        $lte: endTime
    }
    Pk10.find({ 'time': time }).sort({ _id: -1 }).then(data => {
        let section = 0;
        if (Array.isArray(data)) {
            section = data[0].section
        }
        res.json({
            code: 200,
            data: forecast(data),
            section
        })
    })
})

router.get('/data', (req, res, next) => {
    let type = req.query.type || 1;
    Pk10.find().limit(240).sort({ _id: -1 }).then(result => {
        res.json({
            code: 200,
            data: {
                content: analysis(result, type),
                total: 0
            }
        })
    })
})

/**
 * 获取所有号码中奖与不中奖比例
 * params {
 *         startTime
 *         endTime
 *         num 需要展示哪个号码列表
 *        }
 */
router.get('/allNum', (req, res, next) => {
    let startTime = moment(req.query.startTime || Date.now()).startOf('day');
    let endTime = moment(req.query.endTime || req.query.startTime).endOf('day'); // req.query.endTime || Date.now();
    // console.log(startTime,'startTime')
    // console.log(endTime,'endTime')
    let num = req.query.num;
    let time = {
        $gte: startTime,
        $lte: endTime
    }
    Pk10.find({ 'time': time }).sort({ _id: -1 }).then(result => {
        let resquestData = analysis(result, num);
        // if(num){
        //     resquestData = resquestData[Number]
        // }
        res.json({
            code: 200,
            data: {
                content: resquestData,
                total: 0
            }
        })
    })
})


module.exports = router;

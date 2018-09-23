/*
* api 暴露借口
* */
let express = require('express');
let _ = require('lodash');
let moment = require('moment');
let router = express.Router();
let Pk10 = require('../model/Pk10')
let forecast = require('../util/forecast').foreCast;

let analysis = require('../util/analysis').analysis;
router.get('/test', (req, res, next) => {
    Pk10.find({}).limit(5).sort({ _id: -1 }).then(data => {
        let section = 0;
        if (Array.isArray(data)){
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


module.exports = router;

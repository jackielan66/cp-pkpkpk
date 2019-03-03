/**
 * 5分钟采集一次网站信息开奖信息
 */
const request = require('request')
const cheerio = require('cheerio')
const schedule = require('node-schedule');

const Pk10 = require('../model/Pk10')
let url = 'http://pk.770690.com/bjpk.php' || 'http://www.bwlc.net/' || 'http://pk.770690.com/bjpk.php';

const start = () => {
    let now = new Date();
    let HH = now.getHours();
    let MM = now.getMinutes()
    request(url, (err, res, body) => {
        if (!err) {
            // console.log(body,'res');
            changeJqDom(body)
        }
    });
    //每5分钟规则执行一次
    const rule1 = new schedule.RecurrenceRule();
    const times1 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
    rule1.minute = times1
    schedule.scheduleJob(rule1, () => {
        console.log('scheduleCronstyle:' + new Date());
        request(url, (err, res, body) => {
            if (!err) {
                // console.log(body,'res');
                changeJqDom(body)
            }
        });
    });

    // 每一分钟走下分析规则
    
}

function changeJqDom(body) {
    let $ = cheerio.load(body, { decodeEntities: false });
    let section = $('h2').html();
    let data = [];
    let _data = []; // 数据所有制
    $('.cqssc-nums span').each((index, value) => {
        _data.push($(value).text());
    })
    $('.cqssc-nums span').each((index, value) => {
        let obj = {}
        obj.section = section;
        obj.pos = index;
        obj.num = $(value).text();
        if (index == 0) {
            obj.map = [_data[0], _data[1], _data[9]]
        } else if (index == 9) {
            obj.map = [_data[0], _data[8], _data[9]]
        } else {
            obj.map = [_data[index - 1], _data[index], _data[index + 1]]
        }
        data.push(obj)
        // console.log($(value).text(),'vvv')
    })
    Pk10.findOne({ section }).then(isSaved => {
        if (!isSaved) {
            new Pk10({
                section,
                data: data,
                time: Date.now()
            }).save().then(() => {
                // 新添加的，报错数据，请求个自动走一次接口，用来websocket的
                // let api_test = 'http://localhost:3001/api/test'
                // let api_data = 'http://localhost:3001/api/data'
                // request(api_test, (err, res, body) => { })
                // request(api_data, (err, res, body) => { })
            });
        } else {
            console.log('insert error')
        }
    })

}


const autoStart = start;

module.exports = autoStart;
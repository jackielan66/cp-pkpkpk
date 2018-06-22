/**
 * 5分钟采集一次网站信息开奖信息
 */
const request = require('request')
const cheerio = require('cheerio')
const Pk10 = require('../model/Pk10')
let url = 'http://pk.770690.com/bjpk.php';

const start = () => {
    let now = new Date();
    let HH = now.getHours();
    let MM = now.getMinutes()
    if (HH >= 9) {
        if (MM % 5 == 3) {
            console.log('MM', MM);
            request(url, (err, res, body) => {
                if (!err) {
                    // console.log(body,'res');
                    changeJqDom(body)
                }
            });
        }
    }
}

function changeJqDom(body) {
    let $ = cheerio.load(body);
    let num = $('h2').html();
    let data = [];
    $('.cqssc-nums span').each((index, value) => {
        data.push($(value).text())
        // console.log($(value).text(),'vvv')
    })
    new Pk10({
        section: num,
        data: data,
        time: Date.now()
    }).save();
}


const autoStart = () => setInterval(start, 60000)

module.exports = autoStart;
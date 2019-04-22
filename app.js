let express = require('express');
const path = require('path')
let mongoose = require('mongoose');
let app = express();
let startGetData = require('./util/getNetData.js')
let Pk10 = require('./model/Pk10');
let _ = require('lodash');
let moment = require('moment');
let forecast = require('./util/forecast').foreCast;
startGetData();
//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header('Access-Control-Allow-Methods','POST, GET, OPTIONS, DELETE');
    // res.header("Access-Control-Allow-Credentials","true");
    next();
});



app.use('/api', require('./router/api'))
app.use('/', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// app.use('/public', express.static('public'))

let port = 3001;
mongoose.connect('mongodb://localhost:27017/pk10', err => {
    if (!err) {
        app.listen(port, (err) => {
            console.log(`进行中 ...端口号是${port}`)
        })
    } else {
        console.error(err, 'eoor')
    }
})


//  ================== ws 
const ws = require('ws')
const request = require('request')
const { Server } = ws
let getcurrentYucePos = require('./util/forecast').getcurrentYucePos;
let getCurrentErrorPos = require('./util/analysis').getCurrentErrorPos;


const wsServer = new Server({ port: 8006 });
wsServer.on('connection', webSocket => {
    webSocket.send(`服务端主动发送消息`)
    webSocket.on('message', message => {
        console.log('接受到消息', message)
    })
})


let api_test = 'http://localhost:3001/api/test'
let api_data = 'http://localhost:3001/api/data'
setInterval(() => {
    let now = new Date();
    let HH = now.getHours();
    let MM = now.getMinutes();
    if (HH >= 9) {
        getAllNum()
    }
}, 10000)

// TODO 获取更多的值
function getAllNum() {
    let startTime = moment(Date.now()).startOf('day');
    let endTime = moment(Date.now()).endOf('day'); // req.query.endTime || Date.now();
    let time = {
        $gte: startTime,
        $lte: endTime
    }
    Pk10.find({ 'time': time }).sort({ _id: -1 }).then(data => {
        forecast(data);
    })
}
let express = require('express');
const path = require('path')
let mongoose = require('mongoose');
let app = express();
let startGetData = require('./util/getNetData.js')
let _ = require('lodash');

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
    let MM = now.getMinutes()
    if (HH >= 9) {
        if (MM % 5 == 4) {
            // request(api_test, (err, res, body) => { })
            // request(api_data, (err, res, body) => { })
            let currentYucePos = getcurrentYucePos()
            let currentErrorPos = getCurrentErrorPos()
            if (wsServer.clients) {
                wsServer.clients.forEach(v => {
                    // console.log(currentYucePos,'==currentYucePos 预测')
                    // console.log(currentErrorPos,'==currentErrorPos错误')
                    let canBuy = 0;
                    currentYucePos.forEach(y => {
                        if (_.findIndex(currentErrorPos, o => o == y) > -1) {
                            canBuy++;
                        }
                    })
                    let send = false;
                    v.send(canBuy)
                });
            }
        }
    }
}, 10000)
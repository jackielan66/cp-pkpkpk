let express = require('express');
let mongoose = require('mongoose');
let app = express();
let startGetData = require('./util/getNetData.js')

startGetData();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.use('/api',require('./router/api'))
app.use('/public',express.static('public'))

let port = 3001;
mongoose.connect('mongodb://localhost:27017/pk10',err=>{
    if(!err) {
        app.listen(port, (err) => {
            console.log(`进行中 ...端口号是${port}`)
        })
    }else{
        console.error(err,'eoor')
    }
})
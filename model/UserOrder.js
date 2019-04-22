// 用户下单记录
let mongoose = require('mongoose');
let pkShema = mongoose.Schema({
    section: String,
    num: Number,
    pos: Number,
    order: Array,
    time:Date
})
module.exports = mongoose.model('UserOrder', pkShema)
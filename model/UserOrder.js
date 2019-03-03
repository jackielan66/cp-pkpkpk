// 用户下单记录
let mongoose = require('mongoose');
let pkShema = mongoose.Schema({
    section: String,
    num: Number,
    order: Array
})
module.exports = mongoose.model('UserOrder', pkShema)
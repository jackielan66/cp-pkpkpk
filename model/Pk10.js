let mongoose = require('mongoose');
let pkShema = mongoose.Schema({
    section:String,
    data:Array,
    time:Date
})
module.exports = mongoose.model('Pk10',pkShema)
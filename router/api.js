/*
* api 暴露借口
* */
let express = require('express');
let _ = require('lodash');
let moment = require('moment');
let router = express.Router();
let Pk10 = require('../model/Pk10')
let forecast = require('../util/forecast');
let analysis = require('../util/analysis');
router.get('/pk-10', (req, res, next) => {
    Pk10.find({}).limit(5).sort({ _id: -1 }).then(data => {
        res.json({
            code: 200,
            data: forecast(data)
        })
    })
})

router.get('/data', (req, res, next) => {
    let type = req.query.type || 1;
    let time = req.query.time;
    let startTimes = moment(time).hour(8);
    let endTime = moment(time).hour(24);
    let coditions = { '$gte': startTimes, '$lte':endTime };
    Pk10.count({ time: coditions }).then(total => {
        Pk10.find({ time: coditions}).sort({ _id: -1 }).then(result => {
            res.json({
                code: 200,
                data: {
                    content: analysis(result, type),
                    total
                }
            })
        })
    })
})

//
//
// function calResult(result) {
//     if (arguments.length >= 2) {
//         let __rusult = [];
//         arguments[1].forEach(item => {
//             let _result = []
//             if(arguments[2] == 2){
//                 for (let i = 0; i < item.length - 2; i++) {
//                     let _rule1 = ruleType__2(item, i);
//                     if (_rule1) {
//                         let _obj = {};
//                         _obj.title = `规则二`
//                         _obj.id = i;
//                         _obj.num = item[i].num;
//                         _obj.pos = item[i].pos;
//                         _result.push(_obj)
//                     }
//                 }
//             }else{
//                 for (let i = 0; i < item.length - 2; i++) {
//                     let _rule1 = ruleType__1(item, i);
//                     if (_rule1) {
//                         let _obj = {};
//                         _obj.title = `规则一`
//                         _obj.id = i;
//                         _obj.num = item[i].num;
//                         _obj.pos = item[i].pos;
//                         _result.push(_obj)
//                     }
//                 }
//             }
//
//             let detailData = [];
//             _result.forEach((v, index) => {
//                 if (index == 0) return;
//                 let _obj = {};
//                 let notExpectData = []; // 不希望出现的数字
//                 let record = result[v.id].data;
//                 notExpectData.push(record[v.pos]);
//                 if (v.pos == 0) {
//                     notExpectData.push(record[9]);
//                 } else {
//                     notExpectData.push(record[v.pos - 1]);
//                 }
//                 if (v.pos == 9) {
//                     notExpectData.push(record[0]);
//                 } else {
//                     notExpectData.push(record[v.pos + 1]);
//                 }
//                 let prevRecord = result[v.id - 1].data;
//                 let _text = prevRecord[v.pos];
//                 let _repeat = notExpectData.some(o => {
//                     return o == _text
//                 })
//                 _obj.id = v.id - 1;
//                 _obj.num = v.num;
//                 _obj.title = v.title;
//                 if (_repeat) {
//                     _obj.success = false;
//                     _obj.msg = `去它的本期重复了`;
//                 } else {
//                     _obj.success = true;
//                     _obj.msg = `本期没有出现附件三个哦`;
//                 }
//                 detailData.push(_obj)
//             })
//             __rusult.push(detailData)
//         })
//         return __rusult;
//     }
// }
//
//
//
//
//
//
//
//
// /*
// * 彩票算法
// * */
// function method(res) {
//     let No1 = [], No2 = [], No3 = [], No4 = [], No5 = [], No6 = [], No7 = [], No8 = [], No9 = [], No10 = [];
//     /**
//      *  no1 保存的号码类型
//      *  key  排序
//      *  pos  当前这个号码出现的位置
//      */
//     if (res.length <= 3) return [];
//     res.forEach((v, index) => {
//         let data = v.data;
//         No1[index] = {
//             key: index,
//             num: '01',
//             pos: mapIndex(data, '01')
//         };
//         No2[index] = {
//             key: index,
//             num: '02',
//             pos: mapIndex(data, '02')
//         };
//         No3[index] = {
//             key: index,
//             num: '03',
//             pos: mapIndex(data, '03')
//         };
//         No4[index] = {
//             key: index,
//             num: '04',
//             pos: mapIndex(data, '04')
//         };
//         No5[index] = {
//             key: index,
//             num: '05',
//             pos: mapIndex(data, '05')
//         };
//         No6[index] = {
//             key: index,
//             num: '06',
//             pos: mapIndex(data, '06')
//         };
//         No7[index] = {
//             key: index,
//             num: '07',
//             pos: mapIndex(data, '07')
//         };
//         No8[index] = {
//             key: index,
//             num: '08',
//             pos: mapIndex(data, '08')
//         };
//         No9[index] = {
//             key: index,
//             num: '09',
//             pos: mapIndex(data, '09')
//         };
//         No10[index] = {
//             key: index,
//             num: '10',
//             pos: mapIndex(data, '10')
//         };
//     });
//
//     // console.log(No1,'No1')
//
//     // 最新一期开奖结果
//     let newD = res[0].data;
//     let str = "";
//     // console.log(rule_1(newD,[No1,No2,No3,No4,No5,No6,No7,No8,No9,No10]),"   --------   ");
//     return rule_1(newD, [No1, No2, No3, No4, No5, No6, No7, No8, No9, No10],res[1].data)
// }
//
//
// /**
//  *  计算规则
//  *          NumberRecord   01 02 号码近期的开奖记录
//  *          newD   最新一期开奖记录
//  *          preData  上一期的开奖号码
//  */
// function rule_1(newD, NumberRecord,preData) {
//     // console.log(NumberRecord,"NumberRecord")
//     let data = [];
//     NumberRecord.forEach((v, index) => {
//         // 规则 1 判断最近三期的走势是不是同一个方向
//         let _rule1 = (v[0].pos - v[1].pos > 0 && v[1].pos - v[2].pos > 0) ||
//             (v[0].pos - v[1].pos < 0 && v[1].pos - v[2].pos < 0);
//
//         // 规则 2 最近3期 走势，前两期是重码的
//         let _rule2 = (v[0].pos - v[1].pos > 0 && v[1].pos - v[2].pos == 0 && v[0].pos - v[1].pos > 0) ||
//             (v[0].pos - v[1].pos < 0 && v[1].pos - v[2].pos == 0 && v[0].pos - v[1].pos < 0);
//
//         // 规则 3 最近4期 走势，两期两期都是重码的
//         let _rule3 =
//             (v[0].pos - v[1].pos != 0 && v[1].pos - v[2].pos == 0 && v[2].pos - v[3].pos != 0 && v[3].pos - v[4].pos == 0)
//
//         // 提示规则3 下一期即将出现
//         let rule3WillCome = (v[0].pos - v[1].pos == 0 && v[1].pos - v[2].pos != 0 && v[2].pos - v[3].pos == 0);
//         if (rule3WillCome) {
//             let _obj = {
//                 msg: ` 下一期会出现规则三，请期待吧 `
//             }
//             data.push(_obj);
//             return;
//         }
//
//         if (_rule3) {
//             let resultNum = []; // 返回回去的号码
//             let beforeNum, afterNum, numPos;
//             numPos = v[0].pos; // 当前号码最新一期出现的位置
//             if (numPos == 0) {
//                 beforeNum = newD[9]
//             } else {
//                 beforeNum = newD[numPos - 1];
//             }
//             if (numPos == 9) {
//                 afterNum = newD[0]
//             } else {
//                 afterNum = newD[numPos + 1]
//             }
//             let arr = [beforeNum, afterNum, newD[numPos]];
//             resultNum = _.difference(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], arr);
//             resultNum.splice(_.random(resultNum.length - 1), 1)
//             resultNum.splice(_.random(resultNum.length - 1), 1)
//             // console.log(resultNum,"resultNum")
//             let str = '  ,此次开奖号码[ ' +  newD[numPos] + ' ] ' +  '规则( 3 ) 推荐 位置' + ' ' + (numPos + 1)  + ' 推荐的开奖号码为：' + resultNum;
//             let _obj = {
//                 msg: str
//             }
//             data.push(_obj);
//             return;
//             return;
//         }
//
//         if (_rule2) {
//             let resultNum = []; // 返回回去的号码
//             let beforeNum, afterNum, numPos;
//             numPos = v[0].pos; // 当前号码最新一期出现的位置
//             if (numPos == 0) {
//                 beforeNum = newD[9]
//             } else {
//                 beforeNum = newD[numPos - 1];
//             }
//             if (numPos == 9) {
//                 afterNum = newD[0]
//             } else {
//                 afterNum = newD[numPos + 1]
//             }
//             let arr = [beforeNum, afterNum, newD[numPos]];
//             // 增加个号码，同个位置前一期的号码
//             let preNum = preData[numPos];
//             // console.log(preNum,'preNum')
//             arr.push(preNum);
//             resultNum = _.difference(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], arr);
//             resultNum.splice(_.random(resultNum.length - 1), 1)
//             if(resultNum.length>5){
//                 resultNum.splice(_.random(resultNum.length - 1), 1)
//             }
//             // console.log(resultNum,"resultNum")
//             let str =  '当前开奖[ '  +  newD[numPos]  +  ']   规则( 2 ) 推荐 位置' + ' ' + (numPos + 1) +' 推荐的开奖号码为：' + resultNum;
//             let _obj = {
//                 msg: str
//             }
//             data.push(_obj);
//             return;
//         }
//
//         if (_rule1) {
//             let resultNum = []; // 返回回去的号码
//             let beforeNum, afterNum, numPos;
//             numPos = v[0].pos; // 当前号码最新一期出现的位置
//             if (numPos == 0) {
//                 beforeNum = newD[9]
//             } else {
//                 beforeNum = newD[numPos - 1];
//             }
//             if (numPos == 9) {
//                 afterNum = newD[0]
//             } else {
//                 afterNum = newD[numPos + 1]
//             }
//             let arr = [beforeNum, afterNum, newD[numPos]];
//             // 增加个号码，同个位置前一期的号码
//             let preNum = preData[numPos];
//             // console.log(preNum,'preNum')
//             arr.push(preNum);
//             resultNum = _.difference(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], arr);
//
//             // 抽牌算法
//             var copyArr = [],
//                 n = resultNum.length,
//                 i;
//             // 如果还剩有元素则继续。。。
//             while (n) {
//                 // 随机抽取一个元素
//                 i = Math.floor(Math.random() * resultNum.length);
//                 // 如果这个元素之前没有被选中过。。
//                 if (i in resultNum) {
//                     copyArr.push(resultNum[i]);
//                     delete resultNum[i];
//                     n--;
//                 }
//             }
//             // 抽牌算法end
//
//             copyArr.splice(_.random(copyArr.length - 1), 1)
//             if(copyArr.length>5){
//                 copyArr.splice(_.random(copyArr.length - 1), 1)
//             }
//             // console.log(resultNum,"resultNum")d
//             let str = ' 当前开奖  ['  +  newD[numPos]  +']  规则( 1 ) 推荐 位置' + ' ' + (numPos + 1) +  ' 推荐的开奖号码为：' + copyArr;
//             let _obj = {
//                 msg: str
//             }
//             data.push(_obj);
//         }
//     })
//     return data;
// }
//
//
// // 规则列表,只在统计的时候用到
// // 规则 1 判断最近三期的走势是不是同一个方向
// function ruleType__1(item, i) {
//     return (item[i].pos - item[i + 1].pos > 0 && item[i + 1].pos - item[i + 2].pos > 0
//         || item[i].pos - item[i + 1].pos < 0 && item[i + 1].pos - item[i + 2].pos < 0);
// }
//
// // 规则 2 最近3期 走势，前两期是重码的
// function ruleType__2(item, i) {
//     return item[i].pos - item[i + 1].pos != 0 && item[i + 1].pos - item[i + 2].pos == 0;
// }

module.exports = router;

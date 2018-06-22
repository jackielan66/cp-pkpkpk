/**
 * 后台数据初始化，统一成
 *    No1：[]
 *    号码，每期的走势
 */
let _ = require('lodash');
let init = function method(res) {
    let No1 = [], No2 = [], No3 = [], No4 = [], No5 = [], No6 = [], No7 = [], No8 = [], No9 = [], No10 = [];
    /**
     *  no1 保存的号码类型
     *  key  排序
     *  pos  当前这个号码出现的位置
     */
    if (res.length <= 3) return [];
    res.forEach((v, index) => {
        let data = v.data;
        No1[index] = {
            key: index,
            value: '01',
            pos: mapIndex(data, '01')
        };
        No2[index] = {
            key: index,
            value: '02',
            pos: mapIndex(data, '02')
        };
        No3[index] = {
            key: index,
            value: '03',
            pos: mapIndex(data, '03')
        };
        No4[index] = {
            key: index,
            value: '04',
            pos: mapIndex(data, '04')
        };
        No5[index] = {
            key: index,
            value: '05',
            pos: mapIndex(data, '05')
        };
        No6[index] = {
            key: index,
            value: '06',
            pos: mapIndex(data, '06')
        };
        No7[index] = {
            key: index,
            value: '07',
            pos: mapIndex(data, '07')
        };
        No8[index] = {
            key: index,
            value: '08',
            pos: mapIndex(data, '08')
        };
        No9[index] = {
            key: index,
            value: '09',
            pos: mapIndex(data, '09')
        };
        No10[index] = {
            key: index,
            value: '10',
            pos: mapIndex(data, '10')
        };
    });
    return [No1, No2, No3, No4, No5, No6, No7, No8, No9, No10]
};

function mapIndex(NumberRord, number) {
    return (_.findIndex(NumberRord, (o) => {
        return o === number
    }));
}

module.exports = init;
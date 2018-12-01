/**
 * 后台数据初始化，统一成
 *    No1：[]
 *    号码，每期的走势
 */
let _ = require('lodash');
let init = function method(res,num) {
    let No1 = [], No2 = [], No3 = [], No4 = [], No5 = [], No6 = [], No7 = [], No8 = [], No9 = [], No10 = [];
    /**
     *  no1 保存的号码类型
     *  key  排序
     *  pos  当前这个号码出现的位置
     */
    if (res.length <= 3) return [];
    res.forEach((v, index) => {
        let data = v.data;
        No1[index] = _.find(data, o => o.num == "01");
        No2[index] = _.find(data, o => o.num == "02");
        No3[index] = _.find(data, o => o.num == "03");
        No4[index] = _.find(data, o => o.num == "04");
        No5[index] = _.find(data, o => o.num == "05");
        No6[index] = _.find(data, o => o.num == "06");
        No7[index] = _.find(data, o => o.num == "07");
        No8[index] = _.find(data, o => o.num == "08");
        No9[index] = _.find(data, o => o.num == "09");
        No10[index] = _.find(data, o => o.num == "10");
    });
    if(num == 1){
        return [No1]
    }if(num == 2){
        return [No2]
    }if(num == 3){
        return [No3]
    }if(num == 4){
        return [No4]
    }if(num == 5){
        return [No5]
    }if(num ==6){
        return [No6]
    }if(num == 7){
        return [No7]
    }if(num == 8){
        return [No8]
    }if(num == 9){
        return [No9]
    }
    if(num == 10){
        return [No10]
    }
    return [No1, No2, No3, No4, No5, No6, No7, No8, No9, No10]
};



module.exports = init;
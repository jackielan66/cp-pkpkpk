/**
 *  数据分析
 * 统计规则中 出现的次数
 * @param {*} res
 */
/**
 * 通用类方法
 */
let init = require('./init')
let _ = require('lodash');
function analysis(data,type){
    return fenxiResult(data,init(data),type);
}

function fenxiResult(result) {
    if (arguments.length >= 2) {
        let __rusult = [];
        arguments[1].forEach(item => {
            let _result = []
            if(arguments[2] == 2){
                for (let i = 0; i < item.length - 2; i++) {
                    let _rule1 = ruleType__2(item, i);
                    if (_rule1) {
                        let _obj = {};
                        _obj.title = `规则二`
                        _obj.id = i;
                        _obj.num = item[i].value;
                        _obj.pos = item[i].pos;
                        _result.push(_obj)
                    }
                }
            }else{
                for (let i = 0; i < item.length - 2; i++) {
                    let _rule1 = ruleType__1(item, i);
                    if (_rule1) {
                        let _obj = {};
                        _obj.title = `规则一`
                        _obj.id = i;
                        _obj.num = item[i].value;
                        _obj.pos = item[i].pos;
                        _result.push(_obj)
                    }
                }
            }

            let detailData = [];
            _result.forEach((v, index) => {
                if (index == 0) return;
                let _obj = {};
                let notExpectData = []; // 不希望出现的数字
                let record = result[v.id].data;
                notExpectData.push(record[v.pos]);
                if (v.pos == 0) {
                    notExpectData.push(record[9]);
                } else {
                    notExpectData.push(record[v.pos - 1]);
                }
                if (v.pos == 9) {
                    notExpectData.push(record[0]);
                } else {
                    notExpectData.push(record[v.pos + 1]);
                }
                let prevRecord = result[v.id - 1].data;
                let _text = prevRecord[v.pos];
                let _repeat = notExpectData.some(o => {
                    return o == _text
                })
                _obj.id = v.id - 1;
                _obj.num = v.num;
                _obj.title = v.title;
                if (_repeat) {
                    _obj.success = false;
                    _obj.msg = `去它的本期重复了`;
                } else {
                    _obj.success = true;
                    _obj.msg = `本期没有出现附件三个哦`;
                }
                detailData.push(_obj)
            })
            __rusult.push(detailData)
        })
        return __rusult;
    }
}

function ruleType__1(item, i) {
    return (item[i].pos - item[i + 1].pos > 0 && item[i + 1].pos - item[i + 2].pos > 0
        || item[i].pos - item[i + 1].pos < 0 && item[i + 1].pos - item[i + 2].pos < 0);
}

function ruleType__2(item, i) {
    return item[i].pos - item[i + 1].pos != 0 && item[i + 1].pos - item[i + 2].pos == 0;
}

module.exports = analysis;
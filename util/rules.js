/**
 * 规则
 */
let getRule  = function(){
    NumberRecord.forEach((v, index) => {
        // 规则 1 判断最近三期的走势是不是同一个方向
        let _rule1 = (v[0].pos - v[1].pos > 0 && v[1].pos - v[2].pos > 0) ||
            (v[0].pos - v[1].pos < 0 && v[1].pos - v[2].pos < 0);

        // 规则 2 最近3期 走势，前两期是重码的
        let _rule2 = (v[0].pos - v[1].pos > 0 && v[1].pos - v[2].pos == 0 && v[0].pos - v[1].pos > 0) ||
            (v[0].pos - v[1].pos < 0 && v[1].pos - v[2].pos == 0 && v[0].pos - v[1].pos < 0);

        // 规则 3 最近4期 走势，两期两期都是重码的
        let _rule3 =
            (v[0].pos - v[1].pos != 0 && v[1].pos - v[2].pos == 0 && v[2].pos - v[3].pos != 0 && v[3].pos - v[4].pos == 0)

        // 提示规则3 下一期即将出现
        let rule3WillCome = (v[0].pos - v[1].pos == 0 && v[1].pos - v[2].pos != 0 && v[2].pos - v[3].pos == 0);
        if (rule3WillCome) {
            let _obj = {
                msg: ` 下一期会出现规则三，请期待吧 `
            }
            data.push(_obj);
            return;
        }

        if (_rule3) {
            let resultNum = []; // 返回回去的号码
            let beforeNum, afterNum, numPos;
            numPos = v[0].pos; // 当前号码最新一期出现的位置
            if (numPos == 0) {
                beforeNum = newD[9]
            } else {
                beforeNum = newD[numPos - 1];
            }
            if (numPos == 9) {
                afterNum = newD[0]
            } else {
                afterNum = newD[numPos + 1]
            }
            let arr = [beforeNum, afterNum, newD[numPos]];
            resultNum = _.difference(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], arr);
            resultNum.splice(_.random(resultNum.length - 1), 1)
            resultNum.splice(_.random(resultNum.length - 1), 1)
            // console.log(resultNum,"resultNum")
            let str = '  ,此次开奖号码[ ' +  newD[numPos] + ' ] ' +  '规则( 3 ) 推荐 位置' + ' ' + (numPos + 1)  + ' 推荐的开奖号码为：' + resultNum;
            let _obj = {
                msg: str
            }
            data.push(_obj);
            return;
            return;
        }

        if (_rule2) {
            let resultNum = []; // 返回回去的号码
            let beforeNum, afterNum, numPos;
            numPos = v[0].pos; // 当前号码最新一期出现的位置
            if (numPos == 0) {
                beforeNum = newD[9]
            } else {
                beforeNum = newD[numPos - 1];
            }
            if (numPos == 9) {
                afterNum = newD[0]
            } else {
                afterNum = newD[numPos + 1]
            }
            let arr = [beforeNum, afterNum, newD[numPos]];
            // 增加个号码，同个位置前一期的号码
            let preNum = preData[numPos];
            // console.log(preNum,'preNum')
            arr.push(preNum);
            resultNum = _.difference(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], arr);
            resultNum.splice(_.random(resultNum.length - 1), 1)
            if(resultNum.length>5){
                resultNum.splice(_.random(resultNum.length - 1), 1)
            }
            // console.log(resultNum,"resultNum")
            let str =  '当前开奖[ '  +  newD[numPos]  +  ']   规则( 2 ) 推荐 位置' + ' ' + (numPos + 1) +' 推荐的开奖号码为：' + resultNum;
            let _obj = {
                msg: str
            }
            data.push(_obj);
            return;
        }

        if (_rule1) {
            let resultNum = []; // 返回回去的号码
            let beforeNum, afterNum, numPos;
            numPos = v[0].pos; // 当前号码最新一期出现的位置
            if (numPos == 0) {
                beforeNum = newD[9]
            } else {
                beforeNum = newD[numPos - 1];
            }
            if (numPos == 9) {
                afterNum = newD[0]
            } else {
                afterNum = newD[numPos + 1]
            }
            let arr = [beforeNum, afterNum, newD[numPos]];
            // 增加个号码，同个位置前一期的号码
            let preNum = preData[numPos];
            // console.log(preNum,'preNum')
            arr.push(preNum);
            resultNum = _.difference(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'], arr);

            // 抽牌算法
            var copyArr = [],
                n = resultNum.length,
                i;
            // 如果还剩有元素则继续。。。
            while (n) {
                // 随机抽取一个元素
                i = Math.floor(Math.random() * resultNum.length);
                // 如果这个元素之前没有被选中过。。
                if (i in resultNum) {
                    copyArr.push(resultNum[i]);
                    delete resultNum[i];
                    n--;
                }
            }
            // 抽牌算法end

            copyArr.splice(_.random(copyArr.length - 1), 1)
            if(copyArr.length>5){
                copyArr.splice(_.random(copyArr.length - 1), 1)
            }
            // console.log(resultNum,"resultNum")d
            let str = ' 当前开奖  ['  +  newD[numPos]  +']  规则( 1 ) 推荐 位置' + ' ' + (numPos + 1) +  ' 推荐的开奖号码为：' + copyArr;
            let _obj = {
                msg: str
            }
            data.push(_obj);
        }
    })
}

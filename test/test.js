var pinYinOrder = require('../index.js');

var list = [
    '李四',
    '王五',
    '张三',
    "cheng",
    "程",
    "李",
    "赵",
    "诸葛",
    "高"
];


console.log(list.sort(pinYinOrder.compare).join(',') =='cheng,程,高,李,李四,王五,张三,赵,诸葛');
console.log(pinYinOrder.sort(list) == 'cheng,程,高,李,李四,王五,张三,赵,诸葛');
console.log(pinYinOrder.compare('往', '高')===1);
console.log(pinYinOrder.compare('gao', '高') === -1);
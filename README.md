# pinyin-sort
Sort by pinyin depend on GBK charactor index, for NodeJS

利用GBK编码顺序实现简单的按照拼音排序的功能(未处理多音字)

## API
compare 按照拼音比较字符串顺序
```javascript
/**
 * 根据拼音进行字符串比较
 * pinyinOrder.compare(string1, string2)
 * @param {String} string1 待比较的字符串1
 * @param {String} string2 待比较的字符串2
 * @return 1表示大于,0表示等于,-1表示小于
 */
const pinYinOrder = require('pinyin-order');
console.log(pinYinOrder.compare('往', '高中') === 1);  //true
console.log(pinYinOrder.compare('gao', '高')  === -1); //true
```

sort 按照拼音对字符串数组进行排序
```javascript
/**
 * 根据字符串得到按拼音排序后的新字符串
 * pinYinOrder.sort(list)
 * @param {Array} list 待排序字符串数组
 * @return Array 排序后的新数组
 */
const pinYinOrder = require('pinyin-order');
var orderedList = pinYinOrder.sort(['李四','王五','张三','cheng','程']);
console.log(orderList); //['cheng','程','李四','王五','张三']
```


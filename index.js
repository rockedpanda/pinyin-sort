/**
 * 利用GBK编码顺序实现字符串按照拼音排序
 */
const iconv = require('iconv-lite');

/**
 * 根据拼音进行字符串比较
 * @param {String} a 待比较的字符串1
 * @param {String} b 待比较的字符串2
 * @return 1表示大于,0表示等于,-1表示小于
 */
function gbkCompare(a, b) {
    function compareChar(a, b) {
        let buf1 = iconv.encode(a, 'gbk');
        let buf2 = iconv.encode(b, 'gbk');
        return buf1.compare(buf2);
    }
    for (let i = 0; i < a.length; i++) {
        if (b[i] === undefined) {
            return 1;
        }
        let c = compareChar(a[i], b[i]);
        if (c !== 0) {
            return c;
        }
    }
    return -1;
}

/**
 * 根据字符串得到按拼音排序后的新字符串
 * @param {Array} list 待排序字符串数组
 * @return Array 排序后的新数组
 */
function gbkSort(list){
    return list.sort(gbkCompare);
}

exports.compare = gbkCompare;
exports.sort = gbkSort;
var iconv = require('iconv-lite');

/*var gbkList = list.map(function(x,i){
    var g = iconv.encode(x,'gbk');
    return {index:i,t:g};
});

var utf8List = list.map(function (x, i) {
    var g = iconv.encode(x, 'utf8');
    return { index: i, t: g };
});

console.log(gbkList);
console.log(utf8List);
*/

function gbkCompare(a, b) {
    function compareChar(a, b) {
        let buf1 = iconv.encode(a, 'gbk');
        let buf2 = iconv.encode(b, 'gbk');
        //let ans = parseInt(buf1.toString('hex'), 16) - parseInt(buf2.toString('hex'), 16);
        //console.log(a, b, ans, buf1.compare(buf2));
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

function gbkSort(list){
    return list.sort(gbkCompare);
}

exports.compare = gbkCompare;
exports.sort = gbkSort;
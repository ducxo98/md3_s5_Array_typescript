var list = [1, 2, 3];
var categories = ['Sport', 'IT', 'Car'];
console.log('list');
list.forEach(function (num) {
    return console.log(num.toFixed(2));
});
console.log('categries');
categories.forEach(function (str) {
    return console.log(str.includes('a'));
});
// convert mảng từ dạng này sang dạng khác.
var listSquare = list.map(function (num) { return num * num; });
console.log(listSquare);
// Output: [1, 4, 9]
// lọc các phần tử thỏa mãn
var result = categories.filter(function (str) { return str.length > 2; });
console.log(result);
// Output: ['Sport', 'Car']

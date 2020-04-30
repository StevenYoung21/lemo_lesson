function concat(arr1, arr2) {
    let arr = [];
    let arr3 = arr.concat(arr1,arr2);
    return arr3;
}

var arr1 = [1, 2, 3, 4];
var arr2 = ['a', 'b', 'c', 1];
console.log(concat(arr1,arr2));
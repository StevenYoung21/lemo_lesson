function prepend(arr, item) {
    let arr1 = [];
    arr1 = arr.slice(0);
    arr1.unshift(item);
    return arr1;
}
var arr = [1, 2, 3, 4];
console.log(prepend(arr,10));

//在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组


/**
 * unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
 */
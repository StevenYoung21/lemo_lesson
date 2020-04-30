function curtail(arr) {
    let arr1 = [];
    arr1 = arr.slice(1);
    // arr1.splice(0,1);
    // arr1.slice(1);
    return arr1;
}
var arr = [1, 2, 3, 4];
console.log(curtail(arr));

//删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

/*
    slice()	选取数组的的一部分，并返回一个新数组。
    除了浅拷贝功能，还可以删元素
*/ 

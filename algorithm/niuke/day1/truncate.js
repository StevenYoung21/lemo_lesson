function truncate(arr) {
    let arr1 = [];
    arr1 = arr.slice(0);
    arr1.pop();
    return arr1;
}

var arr = [1, 2, 3, 4];
console.log(truncate(arr));

//删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

/*
    pop() 删除数组最后一个元素，返回该元素值 
*/
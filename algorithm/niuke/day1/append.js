function append(arr, item) {
    let arr1 = arr.slice(0);
    arr1.push(item);
    return arr1;
}

var arr = [1, 2, 3, 4];
console.log(append(arr,10));

//在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

/*
    slice(start,end), 浅拷贝   
*/ 
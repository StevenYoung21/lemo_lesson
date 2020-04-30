function remove(arr, item) {
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != item){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
var arr2 = [1, 2, 3, 4, 2];
console.log(remove(arr2,2));
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

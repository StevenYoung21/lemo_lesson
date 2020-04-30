function sum(arr) {
    var s = 0;
    for(let i = 0; i < arr.length; i++){
        s += arr[i];
    }
    return s;
}
var arr1 = [1,2,3];
console.log(sum(arr1));
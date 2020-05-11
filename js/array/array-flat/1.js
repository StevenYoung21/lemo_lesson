// 数组拍平 递归

var arr1 = [1,2,[3,[4]]];

function flat (arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
           res =  res.concat(flat(arr[i]));
        }else{
            res = res.concat(arr[i]);
        }

    }

    return res;
}

console.log(flat(arr1));
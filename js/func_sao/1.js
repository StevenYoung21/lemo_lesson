// 计算长方形面积的函数

function area(w,h){ //es5
    if(arguments.length<2){
        console.error('参数不够');
        throw new error('参数不够')
        return;
    }
    if(typeof w != 'number' || typeof h != 'number'){
        throw new error('参数类型有误');
        return;
    }
    return w*h;
}
console.log(area(2,2));

// var area = function (w,h){ // 匿名函数
    
// }

// let getArea = (w,h) => w*h;  //es6
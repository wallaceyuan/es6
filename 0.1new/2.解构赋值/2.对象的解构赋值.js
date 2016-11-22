'use strict'

//解构赋值 把右侧的数据类型赋值到左侧构造的相似的数据类型中
let obj = {
    a:'a',
    b:'b',
    c:'c',
    arr:[1,2,3]
}
let arr = [1,2,3,4]
//let {b,c,a} = obj
let {a:newa,b,c:newc,arr:[,,x]} = obj

console.log(newa,b,newc,x)

for(let as of arr){
    console.log(as)
}

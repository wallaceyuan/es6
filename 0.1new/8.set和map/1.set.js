/**
 * Created by yuan on 2016/11/23.
 */
//set数组 map对象

'use strict'
let obj = {a:'a'}
var s = new Set([obj,obj,'str',NaN,NaN,+0,-0,{},{},null,null])
console.log(s,s.size,s.length)

s.add({b:'b'})

s.delete('str')

var ent = s.entries()
console.log(s,s.size)
console.log('ent',ent)


let set = new Set([1,2,3])
let aa = [...set]

let arr = [1,2,2,4,6,1,3]
//数组去重


let filter = Array.from(new Set(arr))

console.log(aa,[...new Set(arr)],filter)

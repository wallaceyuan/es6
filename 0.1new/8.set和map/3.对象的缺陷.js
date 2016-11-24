/**
 * Created by yuan on 2016/11/24.
 */
'use strict'
let arr = [1,3]
let o = {o:'o'}
let obj = {}
obj[arr] = 'a'
obj[o] = 'o'
console.log(obj,obj['1,3'])

let objs = {}

var ele = document.getElementsByTagName('body')

console.log(ele)

objs[ele] = 'body'

console.log(objs) //Object {[object HTMLCollection]: "body"}

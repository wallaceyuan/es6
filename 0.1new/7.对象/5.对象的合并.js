'use strict'

let obj1 = {x:'x'}
let obj2 = {y:'y'}
let obj3 = {x:'x2'}

let obj4 = Object.assign(obj1,obj2,obj3)
console.log(obj1,obj2,obj3,obj4)


let info = {
    age:23
}

let me = Object({name:'Weil'},info)
console.log(me)

function Util() {
    this.hehe = 'hehe'
}
Util.prototype.say = (aaa) =>{
    console.log(aaa)
}
var sa = new Util()
sa.say('i am yuanyuan')


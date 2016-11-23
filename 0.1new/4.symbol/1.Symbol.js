
let ele = document.querySelector('#li')

ele.x = 123
ele.y = 234

let syb = Symbol('sub')
let syb2 = Symbol('sub')

var obj = {}

obj[syb] = 123
obj[syb2] = 324
obj.syb = 11111

console.log(syb,syb2,obj)
/**
 * Created by yuan on 2016/11/24.
 */
'use strict'

function * test(){
    let a = 'a'
    yield a
}

let func = test()
let v = func.next()

console.log(v.value)
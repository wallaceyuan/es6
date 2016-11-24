/**
 * Created by yuan on 2016/11/24.
 */

let s1 = new Set([1,3,5,7])

let s2 = new Set([1,4,5,8])

//并集
let sb = new Set([...s1,...s2])
console.log(sb)

//交集
let jb = new Set([...s1].filter(item => s2.has(item)))


//差集
let cb = new Set([...s1].filter(item => !s2.has(item)))

console.log(jb)
console.log(cb)

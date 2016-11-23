/**
 * Created by yuan on 2016/11/23.
 */

let obj = {
    "a":'a',
    "b":'b'
}
let arr = [1,2,3,obj]

let arr2 = arr
let arr3 = arr.slice(0)
let arr4 = Array.from(arr)


arr[0] = 111

console.log(arr2,arr3,arr4)

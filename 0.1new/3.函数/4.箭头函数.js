
let func = function (a){
    return a+1
}
let func2 = (aa) => {
    return a+1
}
let res1 = func(1)

let res2 = func(2)

let arr = [1,3,5,7,9]

let invlution = () =>{

}

let r = arr.map(function (item,index,arr) {
    return item * item
})

let r2 = arr.map(item => item * item)

console.log(r2)

console.log(res1,res2)

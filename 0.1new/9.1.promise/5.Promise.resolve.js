//demo2
let p1 = new Promise((resolve,reject) => {
    console.log('this is in ')//1
    resolve('this is resolve')//3
})
//let p2 = Promise.resolve('success2')

p1.then( value => {
    console.log(value)
})

//demo3
/*let thenableObj = {}
thenableObj.then = (resolve,reject) => {
    console.log('this is in!')
    setTimeout(resolve,1000,'success')
}
let p3 = Promise.resolve(thenableObj)

p3.then( value => {
    console.log(value)
})*/

console.log('this is out!')//2

setTimeout(function () {
    console.log('done')//4
},0)
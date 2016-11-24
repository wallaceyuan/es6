
let p1 = new Promise((resolve,reject) => {
    resolve('success1')
})

let p2 = Promise.resolve('success2')

p2.then( value => {
    console.log(value)
})
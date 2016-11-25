/**
 * Created by yuan on 2016/11/24.
 */
let promise1 = new Promise((resolve,reject) =>{
    setTimeout(function () {
        resolve(1000)
    },1000)
})

let promise2 = new Promise((resolve,reject) =>{
    setTimeout(function () {
        resolve(2000)
    },2000)
})

let promise3 = new Promise((resolve,reject) =>{
    setTimeout(function () {
        resolve(3000)
    },3000)
})

Promise.all([promise1,promise2,promise3])
    .then(data => {
        console.log(data)
    })
    .catch( err => {
        console.log(err)
    })
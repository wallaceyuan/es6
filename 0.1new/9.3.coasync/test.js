'use strict'

let p = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        reject(16666)
    },1000)
})


p.then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log('data',data)
})


function ajacPromise(quertUrl) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET',quertUrl,true)
        xhr.send(null)
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status == 200){
                    resolve(xhr.responseText)
                }else{
                    reject(xhr.responseText)
                }
            }
        }
    })
}


let ajacpromise = ajacPromise('https://api.github.com/')

ajacpromise
    .then(value => {
        console.log(value)
    })
    .catch(err => {
        console.error(err)
    })
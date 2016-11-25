
function *genFunc(initValue) {
    let first = yield new Promise((resolve,reject) =>{
        debugger;
        setTimeout(resolve,1000,'first-'+initValue)
    })
    let second = yield new Promise((resolve,reject) =>{
        debugger;
        setTimeout(resolve,500,'second-'+initValue)
    })
    let third = yield new Promise((resolve,reject) =>{
        debugger;
        setTimeout(resolve,700,'third-'+initValue)
    })
}

let genHandler = genFunc(1)
//genHandler.next().value 返回一个promise对象
genHandler.next().value
    .then( value =>{
        console.log(value)
        genHandler.next().value
            .then(value =>{
                console.log(value)
                genHandler.next().value
                    .then(value => {
                        console.log(value)
                    })
            })
    })

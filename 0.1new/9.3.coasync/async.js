
async function asyncFunc(initValue) {
    let first = await new Promise((resolve,reject) => {
        setTimeout(resolve,1000,'first-'+initValue)
    })
    let second = await new Promise((resolve,reject) => {
        setTimeout(resolve,500,'second-'+initValue)
    })
    let third = await new Promise((resolve,reject) => {
        setTimeout(resolve,700,'third-'+initValue)
    })
    return third
}

asyncFunc('init')
    .then((value) => {
        console.log('asyncFuncRes', value)
    })
    .catch((error) => {
        console.log('asyncError', error)
    })

for(var i = 0; i< 3; i++){
    setTimeout(function(){//打印同一个内存地址的i
        console.log(i)
    })
}



for(var i = 0; i< 3; i++){
    ;(function (i) {
        setTimeout(function(){//形成闭包的块级作用域
            console.log(i)
        })
    })(i)
}

for(let i = 0; i< 3; i++){
    setTimeout(function(){
        console.log(i)
    })
}
function func() {
    setTimeout(function () {
        console.log(this.id)
    })
}

function func2() {
    setTimeout(()=>{
        console.log(this.id)
    })
    setTimeout(function () {
        console.log(this.id)
    })
}

let obj = {
    id:123,
    func1:function () {
        setTimeout(function(){
            console.log(this.id)
        })
    },
    func2:function () {
        setTimeout(()=>{
            console.log(this.id)
        })
    },
    func3:()=>{
        setTimeout(()=>{
            console.log(this.id)
        })
    }
}
//func2.call(obj)
obj.func1()
obj.func2()
obj.func3()
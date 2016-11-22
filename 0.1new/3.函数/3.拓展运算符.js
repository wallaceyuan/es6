function add(a,...args) {
    debugger;
    let res = 0
    res += a
    for(let i = 0,len = args.length;i<len;i++){
        res += i
    }
    return res
}

let res = add(1,3,4,5)
console.log(res)
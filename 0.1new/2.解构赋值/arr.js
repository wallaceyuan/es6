const arr = ['mike','Petter','Ben','William','John']

console.log(arr.entries())//arr.entries()

for(const [index,item] of arr.entries()){
    console.log(index,item)
    if(item.match(/^W/)) break
}
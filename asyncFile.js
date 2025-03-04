const fs = require("fs")
console.log(fs)

//reading text asynchronously
fs.readFile("./texts/read.txt","utf-8",(err,data)=>{
    if(err){
        throw Error("error reading text")
    }
    console.log(data)

    //writing text asynchronously
    fs.writeFile("./texts/write2.txt",data,"utf-8",(err)=>{
        if(err) throw Error("there shows an error")

    })
})
console.log("I ENJOY NODE JS")
console.log("jokon heavy data nie kaj korbo tokon amra asynchronous method apply korbo")
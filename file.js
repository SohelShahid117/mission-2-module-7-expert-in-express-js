const fs = require("fs")
// console.log(fs)

//reading a file text-synchronously
// const readTxt = fs.readFileSync("./texts/read.txt")
const readTxt = fs.readFileSync("./texts/read.txt","utf-8")
console.log(readTxt)

//writing a file text-synchronously
const writtenTxt = fs.writeFileSync("./texts/write.txt",readTxt+"hello world") 

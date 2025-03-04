// console.log("hello")
const http = require("http")
// console.log(http)

const fs = require("fs")


//creating server
const server = http.createServer()

//listener
server.on("request",(req,res)=>{
    if(req.url==="/read-file" && req.method==="GET");
    
        //streaming file reading
    // const readableStream = fs.createReadStream(__dirname + "/texts/read.txt")
    const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt")

        readableStream.on("data",(buffer)=>{
            res.write(buffer)
        })
        readableStream.on("end",()=>{
            res.end("hello world")
        })
        // res.end("hello world")
        
    // }
    // console.log(req)
    console.log(req.url)
    console.log(req.method)
    // res.end("hello world")
    // res.end("hello world")
})

server.listen(5000,()=>{
    console.log("server is listening")
})
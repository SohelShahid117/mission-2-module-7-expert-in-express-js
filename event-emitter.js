// const { Console } = require("console")
const EventEmitter = require("events")
// console.log(EventEmitter)

const myEmitter = new EventEmitter();
console.log(myEmitter)

myEmitter.on("birthday",()=>{
    console.log("HAPPY BIRTHDAY TO U")
})
myEmitter.on("birthday",(param)=>{
    // console.log("HAPPY BIRTHDAY TO U")
    console.log(`i send a gift is ${param}`)
})
myEmitter.emit("birthday","watch")
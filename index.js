console.log("hi")

//local module

// const add = require("./local-1")
// const add = require("./local-2")
// const {add,a} = require("./local-2")
const {add:add1,a:a1} = require("./local-1")
// const {add,a} = require("./local-2")
const {add:add2,a:a2} = require("./local-1")
console.log(add2(99,88,1))
console.log(a1)

//built in module

const path = require("path")
console.log(path.dirname("C:/Programming Hero-Level2/Mission-2/module-7-express js/learning node/index.js"))
console.log(path.parse("C:/Programming Hero-Level2/Mission-2/module-7-express js/learning node/index.js"))
console.log(path.join("C:/Programming Hero-Level2/Mission-2/module-7-express js/learning node/","index.js"))
console.log(path.join("C:/Programming Hero-Level2/Mission-2/module-7-express js/learning node","index.js"))
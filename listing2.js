var unirest = require("unirest")


var req1 = unirest("GET","http://localhost:3000/Cars")
req1.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log(res.body.filter((Cars) => Cars.name.startsWith("M")))
})
// to run this open cmd then node Cars_unirest2.js the result in Start_with_M.txt 
    
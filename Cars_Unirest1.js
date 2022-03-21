var unirest = require("unirest")

var req = unirest("GET","http://localhost:3000/Cars?_limit=10")

req.headers({ "cache-control":"no-catche"})
req.end(function (res) { 
    if (res.error) throw new Error
    (res.error);
    console.log(res.body) })

// to run this open cmd then node Cars_unirest1.js the result in 10first.txt 


    


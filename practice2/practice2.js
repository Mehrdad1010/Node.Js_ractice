const http = require("http");
const fs = require("fs");

const port = 5000;

http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        
    }else {
        res.end("Not Find")
    }

}).listen(port)
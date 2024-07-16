const http = require("http");

const port = 5000;

http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("<h1>Hello World")
    }else {
        res.end("Not Find")
    }

}).listen(port)

console.log(`server is running on ${port}`);

const http = require("http");

const port = 5000;

http.createServer((req, res) => {
    console.log(req.url);
    res.end(req.url)
}).listen(port)
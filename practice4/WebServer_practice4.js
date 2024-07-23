const http = require("http");
const port = 3000;

http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("<h1>Hello Web Application</h1>")
        
    }else if (req.url === "/about" && req.method === "GET") {
        res.end("<h1>About Me</h1>")
        
    }else if (req.url === "/home" && req.method === "GET") {
        res.end("<h1>This is my server</h1>")
        
    }else if (req.url === "/mehrdad" && req.method === "GET") {
        res.end("<h1>My Ferst Name is Mehrdad</h1>")
        
    }else if (req.url === "/amini" && req.method === "GET") {
        res.end("<h1>My Last Name is Amini</h1>")
        
    }else {
        res.end("Not Found")

    }

}).listen(port)
const fs = require("fs");
const http = require("http");
const port = 3000;

http.createServer((req, res) => {
    fs.readFile("./index.html", "utf-8", (err, data) => {
        if (err) {
            console.log("error in read the file ===>", err );
            res.end("somting went wrong");
        }else{
            res.end(data)
        }
    });
}).listen(port);
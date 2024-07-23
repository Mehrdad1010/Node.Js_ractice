const fs = require("fs");
const http = require("http");
const port = 3000;

http.createServer((req, res) => {
    fs.readFile("./index.html", "utf-8", (error, data) => {
        if (error) {
            console.log("error to read the html file ===>", error);
            res.end("error to read html page")
        }else {
            if (req.url === "/" && req.method === "GET") {
                res.end(data)
            }else if (req.url==="/link1"){
                fs.readFile("./js/script.js", "utf-8", (error, data2) => {
                    if(error){
                        console.log("error to read js file====>", error);
                        res.end("error to read js file")
                    }else
                    res.end(data2)
                })
            }
        }
    })
}).listen(port)
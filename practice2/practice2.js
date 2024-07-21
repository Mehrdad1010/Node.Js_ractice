const http = require("http");
const fs = require("fs");

var page1;
try {
    page1 = fs.readFileSync("./display.html", "utf-8")
} catch (error) {
    console.log("error to read the html ===>", error);
}


var link1;
try {
    link1 = fs.readFileSync("./script.js", "utf-8");
} catch (error) {
    console.log("link1 ===>", error);
}
var link2;
try {
    link2 = fs.readFileSync("./sampel.json", "utf-8");
} catch (error) {
    console.log("link2 ===>", error);
}


const port = 5000;

http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end(page1)

    }else if (req.url === "/link1" && req.method === "GET") {
        res.end(link1)
        
    }else if (req.url === "/link2" && req.method === "GET") {
        res.end(link2)
        
    }else {
        res.end("Not Find")
    }

}).listen(port)
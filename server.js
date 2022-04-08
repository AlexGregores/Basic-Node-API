const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if(req.url === "/product") {
        res.end(
            JSON.stringify({
                message: "product path"
            })
        );
    }

    if(req.url === "/users") {
        res.end(
            JSON.stringify({
                message: "users path"
            })
        );
    }

    else(res.end(
JSON.stringify({
    message : "Other path"
})
        ))
    


}).listen(4002, () => console.log("Server is running at 4002"))



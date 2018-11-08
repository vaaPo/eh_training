var http = require('http');
var server = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.writeHead(200, {
            //"Content-Type": "text/plain"
            "Content-Type": "text/html"
        });
        response.end("Hello <strong>World</strong>");
    } else if (request.url === '/goodbye') {
        if(request.method==='GET'){
        response.writeHead(200, {
            //"Content-Type": "text/plain"
            "Content-Type": "text/html"
        });
        response.end("GOODBYE <strong>World</strong>");
    } else if (request.method==='POST'){
        response.writeHead(200, {
            //"Content-Type": "text/plain"
            "Content-Type": "text/html"
        });
        response.end("Posting goodbye (due POST) cruel world!");
    }
    }
});

server.listen(3000);
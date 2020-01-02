const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end(req.url.slice(1));
});

server.listen(3000, () => {
    console.log('Server is listening at port 3000');
});
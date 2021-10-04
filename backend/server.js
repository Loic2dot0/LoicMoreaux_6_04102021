const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Server in action!');
});

server.listen(process.env.PORT || 3000);

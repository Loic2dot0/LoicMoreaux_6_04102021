const http = require('http');
const app = require('./app'); //importation de l'application

app.set('port', process.env.PORT || 3000); // configuration des ports utilisés par l'application

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
const port = 3000;
server.listen(port, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from Lalit - DevOps Practice Day 3 DONE! </h1><p>CI/CD pipeline test successful!</p>');
});
server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
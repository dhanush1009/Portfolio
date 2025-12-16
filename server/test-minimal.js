import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from minimal server!');
});

server.listen(5001, () => {
  console.log('✅ Minimal server listening on port 5000');
});

server.on('error', (err) => {
  console.error('❌ Server error:', err);
});

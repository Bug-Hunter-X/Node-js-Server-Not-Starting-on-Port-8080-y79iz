const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

// Handle port assignment errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error(`Failed to start server: ${err.message}`);
    process.exit(1);
  }
});

// Handle successful server startup
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

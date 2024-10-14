const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Log the request headers to the console
    console.log('Request Headers:', req.headers);

    // Set the content type to HTML and write the headers to the response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Request Headers</h1>');
    res.write('<pre>' + JSON.stringify(req.headers, null, 2) + '</pre>');

    // End the response
    res.end();
});

const PORT = process.env.PORT || 443;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Create a web server using Node.js and Express
const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Handle GET requests to /comments
app.get('/comments', (req, res) => {
    const comments = [
        { id: 1, text: 'This is the first comment.' },
        { id: 2, text: 'This is the second comment.' },
        { id: 3, text: 'This is the third comment.' }
    ];
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
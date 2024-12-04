const express = require('express');
const path = require('path');  // Correctly require the 'path' module

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    res.send(`
        <html>
            <head>
                <!-- Correctly link the external CSS file -->
                <link rel="stylesheet" type="text/css" href="/style.css"> 
            </head>
            <body>
                <!-- Navigation Bar -->
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

                <h1>Hello world</h1>
            </body>
        </html>
    `);
});

// Simple route for 'about' and 'contact' pages
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
